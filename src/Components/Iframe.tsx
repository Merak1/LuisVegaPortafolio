const Iframe = ({ videoUrl }: any) => {
  // console.log("video url: " + videoUrl);
  // const iframe =
  // console.log("video url: " + videoUrl);
  // return (
  //   <div
  //     style={{
  //       paddingTop: "56.25%;",
  //       position: "relative",
  //       overflow: "hidden",
  //       width: "100%",
  //     }}
  //     dangerouslySetInnerHTML={{ __html: videoUrl ? videoUrl : "" }}
  //   />
  // );
  return (
    <>
      <iframe
        src={videoUrl}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </>
  );
};

export default Iframe;

{
  /* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/918725720?h=628ae8424e&autoplay=1&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */
}
