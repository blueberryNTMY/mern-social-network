const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длинна пароля 6 символов').isLength({
      min: 6
    }),
    check('firstName', 'Некорректное имя').isString(),
    check('lastName', 'Некорректная фамилия').isString()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации'
        });
      }

      const { email, password, firstName, lastName, birthday } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({
          message: 'Такой пользователь уже существует'
        });
      }

      const hasedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        email,
        password: hasedPassword,
        firstName,
        lastName,
        birthday
      });

      await user.save();

      return res.status(201).json({ message: 'Пользователь создан.' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Некорректный email.').isEmail(),
    check('password', 'Минимальная длинна пароля 6 символов.').isLength({
      min: 6
    })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при авторизации.'
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: 'Такой пользователь не существует.'
        });
      }

      const isMatchPassword = await bcrypt.compare(password, user.password);

      if (!isMatchPassword) {
        return res.status(400).json({ message: 'Неверный пароль' });
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h'
      });

      res.json({ token, userId: user.id });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
  }
);

module.exports = router;
