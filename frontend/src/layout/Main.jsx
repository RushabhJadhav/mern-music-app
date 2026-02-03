import { Routes, Route } from "react-router";
import Home from "../pages/Album";
import Artists from "../pages/Artists";
import Album from "../pages/Album";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/artist:id" element={<Artists />}></Route>
            <Route path="/album:id" element={<Album />}></Route>
        </Routes>
    )
}

export default Main;