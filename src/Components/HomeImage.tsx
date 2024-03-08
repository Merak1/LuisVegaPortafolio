import React, { useState } from "react";
import Image, { ImageParams } from "./Image";
import { Link } from "react-router-dom";

interface HomeImageProps {
  image: ImageParams;
  index: number;
}

const HomeImage: React.FC<HomeImageProps> = ({ image, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={index}
      className="text-center "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/${image.name}`}>
        <p
          className={`
              absolute text-white m-auto top-1/2 left-1/2
               -translate-x-1/2 -translate-y-1/2
               transition  duration-100
               z-20 ${isHovered ? "show-text" : "hide-text "} 
               `}
        >
          {image.fullName}
        </p>
        <Image
          name={image.name}
          url={image.url}
          number={index}
          isHomeGif={true}
        />
      </Link>
    </div>
  );
};

export default HomeImage;
