import { Link, useParams } from "react-router-dom";
import Image, { Details, ImageParams } from "./Image";
import Slider from "react-slick";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { getNumberByImageName } from "../utils/getNumberByImageName";
import useDimensions from "../hooks/useDimensions.js";
import Iframe from "./Iframe.js";
import SelectionCarousel from "./SelectionCarousel.js";

interface HomeProps {
  images: ImageParams[];
}
const Work: React.FC<HomeProps> = ({ images }) => {
  let sliderRef = useRef<any>();
  const [slideSpeed, setSlideSpeed] = useState<any>(3000);
  const params = useParams();
  const { name } = params;
  const currentSlide = getNumberByImageName(name);
  // console.log("current slide: " + currentSlide);
  useEffect(() => {
    sliderRef.current.slickGoTo(currentSlide - 1);
  }, [params]);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    draggable: false,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 300,
    cssEase: "linear",
    pauseOnHover: true,
    useCSS: true,
    // className: "center",
    centerMode: true,
    centerPadding: "60px",
    adaptiveHeight: true,
  };

  const CustomSlide = (props: { [x: string]: any; index: any }) => {
    const [isHovered, setIsHovered] = useState(false);
    let customSlideRef = useRef<HTMLDivElement>(null);
    const { width, height } = useDimensions(customSlideRef);
    const [biggerImageHeight, setBiggerImageHeight] = useState(height);
    useEffect(() => {
      if (isHovered === true) {
        setSlideSpeed(0);
        setBiggerImageHeight(500);
      }
    }, [isHovered]);
    const { index, ...otherProps } = props;
    const { name, url } = otherProps.image;

    return (
      <>
        <div
          ref={customSlideRef}
          className={`  
              ${isHovered ? "isHovered" : "isNotHovered"}
                relative text-center
               `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to={`/${name}`}>
            <p className="">{name}</p>
            <Image name={name} url={url} number={index} />
          </Link>
        </div>
      </>
    );
  };
  const {
    name: imageName,
    fullName,
    url,
    number: index,
    details,
  } = images[currentSlide - 1];

  const {
    director,
    director_of_photography,
    producer,
    production_designer,
    art_directors,
    year,
    videoUrl,
    productionImages,
  } = details;

  // console.log("productionImages", productionImages);

  return (
    <>
      <div className="mx-auto  h-auto mb-2 top-carousel-selection ">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image: ImageParams, index: number) => (
            <div key={index}>
              <CustomSlide index={index} image={image} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="h-1/4 ">
        <div className="  text-center  mx-auto  flex  justify-center ">
          <SelectionCarousel
            productionImages={productionImages}
            videoUrl={videoUrl}
          />
        </div>

        <div className="mx-auto w-3/5">
          <div className="">
            <h1>{fullName}</h1>
            <h2>{director}</h2>
          </div>
          <div className="">
            <p>Production designer : {director_of_photography}</p>
            <p>Set decorator : {producer} </p>
            <p>Supervising art director : {production_designer} </p>
            <p>{year}</p>
            {/* <p>art directors : {art_directors}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
