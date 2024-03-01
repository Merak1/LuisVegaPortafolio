import { images } from "./images";
export const getNumberByImageName = (imageName: string | undefined) => {
  const current = images.filter((image) => image.name === imageName);
  return current[0].number;
};
