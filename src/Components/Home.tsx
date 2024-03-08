import { Link } from "react-router-dom";
import Image, { ImageParams } from "./Image";
import HomeImage from "./HomeImage";

interface HomeProps {
  images: ImageParams[];
}

const Home: React.FC<HomeProps> = ({ images }) => {
  return (
    <>
      <div className=" bg-purple-300   home-grid  ">
        {images.map((image: ImageParams, index: number) => (
          <div className="relative home-gif" key={index}>
            <HomeImage image={image} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
