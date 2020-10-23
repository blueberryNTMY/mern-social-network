import { useEffect, useState } from "react"
import axios from 'axios';

interface IPropsHook {
  url: URL,
  options: object
}

export const useFetch = (url, opnions) => {
  const [response, setResponse] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<object | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios()
    }
  }, [])
}