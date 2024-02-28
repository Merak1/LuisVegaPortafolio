import { useState } from "react";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  const [images, setImages] = useState([
    {
      name: "gorilla",
      url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
    },
    {
      name: "shack",
      url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      name: "gorilla",
      url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
    },
    {
      name: "shack",
      url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      name: "gorilla",
      url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
    },
    {
      name: "shack",
      url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      name: "gorilla",
      url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
    },
    {
      name: "shack",
      url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      name: "gorilla",
      url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
    },
    {
      name: "shack",
      url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
  ]);

  // const images = [
  //   {
  //     name: "gorilla",
  //     url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
  //   },
  //   {
  //     name: "shack",
  //     url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  //   },
  //   {
  //     name: "gorilla",
  //     url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
  //   },
  //   {
  //     name: "shack",
  //     url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  //   },
  //   {
  //     name: "gorilla",
  //     url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
  //   },
  //   {
  //     name: "shack",
  //     url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  //   },
  //   {
  //     name: "gorilla",
  //     url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
  //   },
  //   {
  //     name: "shack",
  //     url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  //   },
  //   {
  //     name: "gorilla",
  //     url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHIzeDQ4dzR0bWVweXJoZ29zazd4emVxdDAxZGFpM3oxYTI1ZnAyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IIIg3ZHcOqYtW0wEIB/giphy.gif",
  //   },
  //   {
  //     name: "shack",
  //     url: "https://media4.giphy.com/media/nNxT5qXR02FOM/giphy.gif?cid=ecf05e4773pv6p2xv70i44sx5oukslm14kpb8mrksi10m5k7&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  //   },
  // ];

  return (
    <div className="h-[100vh] max-w-[1920px] mx-auto h-3vh  ">
      <NavBar />
      <div className="h-2/6 bg-red-300 "></div>

      <Home images={images} />
      {/* <div className="h-auto bg-purple-300  grid grid-cols-5 ">
        {images.map((image, index) => (
          <Image name={image.name} url={image.url} number={index} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
