import React from "react";

export interface ImageParams {
  url: string;
  name: string;
  number?: number;
}
const Image: React.FC<ImageParams> = ({ name, url, number }) => {
  return (
    <>
      <div className="h-full">
        <img className="h-full" src={url} alt={name} />
      </div>
    </>
  );
};

export default Image;
