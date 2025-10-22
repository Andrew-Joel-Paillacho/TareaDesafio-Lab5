export function useFetch() {

  const fetchDataBackend = async (url) => {
    try {
      const request = await fetch(url)
      const response = await request.json()
      return response      
    } catch (error) {
      console.log(error)
    }
  }
  
  return fetchDataBackend
}
