import Main from "./layout/Main";
import Header from "./layout/Header";
import LeftSideBar from "./layout/LeftSideBar";
import MusicPlayer from "./layout/MusicPlayer";

const App = () => {
  
  return (
    <div className="bg-gray-600 h-screen grid grid-cols-12 grid-rows-12 relative">
      <Header />
      <LeftSideBar />
      <Main />
      <MusicPlayer />
    </div>
  )
}

export default App;