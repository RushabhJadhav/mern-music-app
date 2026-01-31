import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [track, setTract] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://saavn.sumit.co/api/songs/Eng0tSqR`);

        const resData = res.data;

        const firstTrack = resData.data[0].downloadUrl[4];
        
        setTract(firstTrack)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <button className="px-3 m-2 border-2 rounded-sm cursor-pointer">Click</button>
      {track && <audio controls src={track.url}></audio>}
    </>
  )
}

export default App