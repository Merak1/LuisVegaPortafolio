// import { images } from "./images";
import { images } from "./images_complete";
export const getNumberByImageName = (imageName: string | undefined) => {
  const current = images.filter((image) => image.name === imageName);
  // console.log("getNumberByImageName ", current[0].number);
  return current[0].number;
};
