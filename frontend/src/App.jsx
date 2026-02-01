import { useEffect, useState } from "react";
import axios from "axios";
import { fetchSong } from "./store/slices/fetchSong/songSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const track = useSelector((state) => state.song.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://saavn.sumit.co/api/songs/4pPkHRl2`);

        const resData = res.data;

        const firstTrack = resData.data[0].downloadUrl[4];
        
        dispatch(fetchSong(firstTrack));
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