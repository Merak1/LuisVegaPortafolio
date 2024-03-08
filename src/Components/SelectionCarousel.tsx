import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "./Image";
import Iframe from "./Iframe";
import { RxTriangleRight, RxTriangleLeft } from "react-icons/rx";

interface ProductionImagesParams {
  productionImages?: string[];
  videoUrl?: string[];
  hasVideos?: boolean;
  hasImages?: boolean;
}
const SelectionCarousel: React.FC<ProductionImagesParams> = ({
  productionImages,
  // name,
  videoUrl,
}) => {
  const [nav1, setNav1] = useState<Slider | undefined | null>(null);
  const [nav2, setNav2] = useState<Slider | undefined | null>(null);
  // if (productionImages )
  //   const imageAndUrlArray = [...productionImages, ...videoUrl];
  // console.log("imageAndUrlArray ", imageAndUrlArray);
  // let sliderRef = useRef<any>();
  let sliderRef1 = useRef<any>(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="triangle-right"
        style={{ display: "block" }}
      >
        <RxTriangleRight size={30} />
      </div>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="triangle-left"
        // style={{ display: "block", background: "blue" }}
        style={{ display: "block" }}
      >
        <RxTriangleLeft size={30} />
      </div>
    );
  };

  const settingsVideoSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsThumbnailSlider = {
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 4,
    focusOnSelect: true,
    arrows: true,
    accessibility: true,
    centerMode: true,
  };
  const CustomSelectionImageSlide = (props: {
    [x: string]: any;
    index: any;
  }) => {
    const { index, ...otherProps } = props;
    const { image } = otherProps;
    return (
      // <div className="w-[120px] h-[120px] border border-purple-400  relative">
      <div className="w-[150px] h-[150px] border border-purple-400  relative">
        <img
          src={image}
          alt=""
          className="absolute  w-full h-full object-scale-down "
        />
      </div>
    );
  };
  const CustomSelectionVideoSlide = (props: {
    [x: string]: any;
    index: any;
  }) => {
    const { index, ...otherProps } = props;
    const { videoUrl } = otherProps;
    // console.log("videoUrl ", videoUrl);
    {
      /* <div className="benis flex flex-col justify-center"> */
    }
    return (
      // <div>
      <div className=" relative w-full overflow-hidden pt-[56.25%]">
        <p className="mt-5">{index + 1}</p>
        <Iframe videoUrl={videoUrl} />
      </div>
      // </div>
    );
  };
  if (videoUrl !== undefined && productionImages !== undefined) {
    console.log("videoUrl 💳", videoUrl);
    console.log("productionImages 🦗", productionImages);
    return (
      <div className="w-2/3 flex flex-row justify-center h-auto selection_carousel mb-7">
        <div className="mx-auto w-full ">
          <Slider
            {...settingsVideoSlider}
            ref={(slider) => (sliderRef1 = slider)}
            asNavFor={nav2}
          >
            {videoUrl.map((videoUrl, index: number) => (
              <div key={index} style={{ width: "100%" }}>
                <CustomSelectionVideoSlide index={index} videoUrl={videoUrl} />
              </div>
            ))}
            {/* {productionImages.map((image, index: number) => (
            <div key={index}>
            <CustomSelectionImageSlide index={index} image={image} />
            </div>
          ))} */}
          </Slider>

          <Slider
            {...settingsThumbnailSlider}
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
          >
            {productionImages.map((image, index: number) => (
              <div key={index}>
                <CustomSelectionImageSlide index={index} image={image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
};

export default SelectionCarousel;
