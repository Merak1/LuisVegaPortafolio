const NavBar = () => {
  return (
    <>
      <div className="h-min-1/6 bg-[#CBD4DD] ">
        <div className="flex w-full bt-3 align-middle content-center justify-center">
          <div className="w-1/5 flex justify-center my-auto  mt-8">
            <div className="bg-slate-800 text-white px-8 py-4 text-3xl">
              logo
            </div>
          </div>
          <div className="w-3/5 text-center mt-8">
            <h1 className="text-3xl uppercase font-semibold">Luis Vega</h1>
            <h2 className="text-2xl uppercase mt-2 ">Art director</h2>
          </div>
          <div className="w-1/5 p-4 mt-8 flex content-center justify-center my-auto">
            {/* <div>English / Español</div> */}
          </div>
        </div>
        <div className="flex py-3 bg-[#CBD4DD] content-center justify-evenly  ">
          <div className="text-xl">
            <a href="Work">Work</a>
          </div>
          <div className="text-xl">About</div>
          {/* <div className="text-xl">Contact</div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
