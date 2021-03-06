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
        const { data } = await axios.get(
          `/.netlify/functions/data?requiredData=${endpoint}`
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
