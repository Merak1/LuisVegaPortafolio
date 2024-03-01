import React from "react";

export interface ImageParams {
  url: string;
  name: string;
  number?: number;
}
const Image: React.FC<ImageParams> = ({ name, url, number }) => {
  return (
    <>
      {/* <div key={number} className="aspect-square"> */}
      {/* <div
        className="w-auto "
        className="w-[150px] h-[150px] "
        style={{
          backgroundImage: `url("${url}")`,
          backgroundPosition: "center",
          backgroundPositionX: "50%",
          backgroundPositionY: "50%",
          backgroundRepeat: "no-repeat",
        }}
      > */}
      <img
        // className="object-cover w-[200px] h-[200px] aspect-square"
        className="absolute  w-full h-full object-cover "
        src={url}
        alt={name}
      />
      {/* </div> */}
    </>
  );
};

export default Image;
