import { useEffect, useState } from "react"

const App = () => {
  const [track, setTract] = useState(null);
  const CLIENT_ID = "1c7e8f56";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jamendo.com/v3.0/albums/tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=1&artist_name=we+are+fm&type=album+single`)
        
        const resData = await response.json();

        const firstTrack = resData.results[0].tracks[0];
        
        setTract(firstTrack)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [CLIENT_ID])

  return (
    <>
      <button className="px-3 m-2 border-2 rounded-sm cursor-pointer">Click</button>
      {track && <audio controls src={track.audio}></audio>}
    </>
  )
}

export default App