import { useEffect, useState } from 'react'
import axios from 'axios'

interface Params {
  endpoint: string
}

const useFetch = <T = undefined>({
  endpoint,
}: Params): [T | undefined, boolean, any] => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState()
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsDataLoading(true)
      try {
        axios.get(
          'https://dreamy-shannon-6bac5d.netlify.app/.netlify/functions/hello-world'
        )

        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}${endpoint}`
        )

        setData(data)
        setIsDataLoading(false)
      } catch (err) {
        setError(err as any)
      }
    }

    fetchData()
  }, [endpoint])

  return [data, isDataLoading, error]
}

export default useFetch
