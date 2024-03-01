import { Link, useParams } from "react-router-dom";
import Image, { ImageParams } from "./Image";
import Slider from "react-slick";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { getNumberByImageName } from "../utils/getNumberByImageName";

interface HomeProps {
  images: ImageParams[];
}
const Work: React.FC<HomeProps> = ({ images }) => {
  let sliderRef = useRef<any>();
  const [hoveredSlide, setHoverSlide] = useState([1, 2, 3, 4, 5, 6]);

  const params = useParams();
  const { name } = params;
  const currentSlide = getNumberByImageName(name);
  console.log("name 👾", name);
  console.log("currentSlide 👾", currentSlide);

  useEffect(() => {
    sliderRef.current.slickGoTo(currentSlide - 1);
  }, [params]);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    draggable: false,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    useCSS: true,
    // className: "center",
    centerMode: true,
    centerPadding: "  60px",
  };

  const CustomSlide = (props: { [x: string]: any; index: any }) => {
    const { index, ...otherProps } = props;
    const { name, url } = otherProps.image;
    return (
      <>
        {/* <div className="relative"> */}
        {/* <h3>{index}</h3> */}

        {/* <Link to={`/${name}/${index}`}> */}
        <Link to={`/${name}`}>
          <Image name={name} url={url} number={index} />
        </Link>
        {/* </div> */}
      </>
    );
  };

  return (
    <div className="bg-purple-50 w-[100vw]  ">
      <div className="mx-auto  w-2/2">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image: ImageParams, index: number) => (
            <div
              key={index}
              className=" h-[40vh] 
                relative
               bg-red-300"
            >
              <CustomSlide index={index} image={image} />
              {/* <Image name={image.name} url={image.url} number={index} /> */}
            </div>
          ))}
        </Slider>
        {/* </div> */}
      </div>
      <div className="h-1/4  h-auto bg-red-400">
        <div className="  text-center bg-teal-300 flex flex-col justify-center">
          <div>This is image</div>
          <div>This is carousel</div>
        </div>

        <div className="mx-auto w-3/5">
          <div className="">
            <h1>Nombre proyecto</h1>
            <h2>Productora</h2>
          </div>
          <div className="">
            <p>Production designer</p>
            <p>Set decorator</p>
            <p>Supervising art director</p>
            <p>art directors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
