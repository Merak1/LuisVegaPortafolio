import { Link, useMatch, useParams } from "react-router-dom";
import { ImageParams } from "./Image";
import { useEffect } from "react";

interface NavBarProps {
  firstImage: ImageParams;
}

const NavBar: React.FC<NavBarProps> = ({ firstImage }) => {
  const { name, number } = firstImage;

  return (
    <>
      <div className=" mt-2 ">
        <div className="flex w-full bt-1 align-middle content-center justify-center">
          <div className="w-1/5 flex justify-center my-auto  ">
            <div className="bg-slate-800 text-white px-8 py-4 text-3xl">
              <Link to="/"> logo </Link>
            </div>
          </div>
          <div className="w-3/5 text-center ">
            <h1 className="text-3xl uppercase font-semibold">Luis Vega</h1>
            <h2 className="text-2xl uppercase mt-2 ">Art director</h2>
          </div>
          <div className="w-1/5 p-4 mt-2 flex content-center justify-center my-auto"></div>
        </div>
        <div className="flex py-4  content-center justify-evenly  ">
          <div className="text-xl">
            <Link to={`/${name}`}> Work/Reel</Link>
          </div>
          <div className="text-xl">About</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
