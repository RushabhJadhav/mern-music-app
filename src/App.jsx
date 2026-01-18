import { useEffect, useState } from "react"

const App = () => {
  const [data, setData] = useState(null);
  const apiKey = "1c7e8f56";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=coldplay&t=yellow")
        
        const resData = await response.json();
        console.log(resData)
        setData(resData)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <button className="px-3 m-2 border-2 rounded-sm cursor-pointer">Click</button>
      <audio controls src=""></audio>
    </>
  )
}

export default App