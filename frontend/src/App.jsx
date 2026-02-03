import Main from "./layout/Main";
import Header from "./layout/Header";
import LeftSideBar from "./layout/LeftSideBar";
import MusicPlayer from "./layout/MusicPlayer";

const App = () => {
  
  return (
    <div>
      <Header />
      <Main />
      <LeftSideBar />
      <MusicPlayer />
    </div>
  )
}

export default App;