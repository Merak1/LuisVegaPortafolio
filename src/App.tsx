import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import { Route, Routes } from "react-router-dom";
import { getFirstImage } from "./utils/getFirstImage";
// import { images } from "./utils/images";
import { images } from "./utils/images_complete";
function App() {
  const firstImage = getFirstImage();

  return (
    <div className="h-auto max-w-[1920px]  ">
      <NavBar firstImage={firstImage} />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/:name" element={<Work images={images} />} />
      </Routes>
    </div>
  );
}

export default App;
