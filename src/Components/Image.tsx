import React from "react";

export interface ImageParams {
  url: string;
  name: string;
  fullName?: string;
  number?: number;
  details: Details;
}

export type Details = {
  director: string;
  director_of_photography: string;
  producer: string;
  production_designer?: string;
  art_directors?: string;
  year?: number;
  videoUrl?: string[];
  productionImages?: string[];
};

// type ImageProps = Omit<ImageParams, "details">

type ImageProps = {
  url: string;
  name: string;
  fullName?: string;
  number?: number;
  isHomeGif?: boolean;
};

const Image: React.FC<ImageProps> = ({ name, url, number, isHomeGif }) => {
  return (
    <>
      <img
        className={`absolute w-full h-full object-cover ${
          isHomeGif ? "home-gif" : ""
        }  `}
        src={url}
        alt={name}
      />
    </>
  );
};

export default Image;
