import React from "react";
import Image, { ImageParams } from "./Image";

interface HomeProps {
  images: ImageParams[];
}

const Home: React.FC<HomeProps> = ({ images }) => {
  return (
    <div className="h-auto bg-purple-300  grid grid-cols-5  ">
      {images.map((image: ImageParams, index: number) => (
        <div key={index}>
          <Image name={image.name} url={image.url} number={index} />
        </div>
      ))}
    </div>
  );
};

export default Home;
