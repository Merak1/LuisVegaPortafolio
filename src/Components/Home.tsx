import { Link } from "react-router-dom";
import Image, { ImageParams } from "./Image";

interface HomeProps {
  images: ImageParams[];
}

const Home: React.FC<HomeProps> = ({ images }) => {
  return (
    <>
      <div className=" bg-purple-300   home-grid  ">
        {images.map((image: ImageParams, index: number) => (
          <div key={index} className="relative">
            {/* <Link to={`work/${index + 1}`}> */}
            {/* <Link to={`/${image.name}/${index}`}> */}
            <Link to={`/${image.name}`}>
              <Image name={image.name} url={image.url} number={index} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
