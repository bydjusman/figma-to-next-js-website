import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row justify-center px-4 sm:px-36 space-y-8 sm:space-y-0 sm:space-x-20 pt-28 pb-28">
        <div className="w-full sm:w-2/4">
          <h1 className="text-black font-heebo text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[48px] sm:leading-[56px] lg:leading-[61px]">
            Hi, I am John <br />
            Creative Technology
          </h1>
          <p className="text-black mt-5 mb-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.{" "}
          </p>
          <button className="mt-4 bg-red-400 text-white py-2 px-4 rounded shadow-lg shadow-red-500/50">
            Download Resume
          </button>
        </div>
        <div className="w-full sm:w-1/4 pt-10">
          <img
            src="/image.png"
            alt="Dev Image"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>

      {/* Recent Post Section */}
      <div className="bg-rose-100 flex flex-col sm:flex-row px-4 sm:px-52 space-y-8 sm:space-y-0 sm:space-x-20 pb-14 pt-8">
        <div>
          <h4 className="text-black text-[18px] pb-3 font-bold">Recent Post</h4>
          <div className="bg-white px-8 py-10 rounded-sm">
            <h2 className="text-black text-[22px] font-heebo font-bold">
              Making a design system from scratch
            </h2>
            <div className="flex">
              <div>
                <h5 className="text-gray-500 text-[16px] pt-5 pb-5">
                  12 Feb 2020 <span className="px-3 ">|</span>
                </h5>
              </div>
              <div>
                <h5 className="text-gray-500 text-[16px] pt-5 pb-5">
                  Design , Pattern{" "}
                </h5>
              </div>
            </div>
            <p className="text-blue-950">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.{" "}
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-red-400 text-[18px] pb-3 text-end">View All</h4>
          <div className="bg-white px-8 py-10 rounded-sm">
            <h2 className="text-black text-[22px] font-heebo font-bold">
              Making a design system from scratch
            </h2>
            <div className="flex">
              <div>
                <h5 className="text-gray-500 text-[16px] pt-5 pb-5">
                  12 Feb 2020 <span className="px-3 ">|</span>
                </h5>
              </div>
              <div>
                <h5 className="text-gray-500 text-[16px] pt-5 pb-5">
                  Design , Pattern{" "}
                </h5>
              </div>
            </div>
            <p className="text-blue-950">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div>
        <h5 className="text-black px-4 sm:px-52 text-[18px] font-semibold pb-5 pt-12">
          Featured Section
        </h5>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10 px-4 sm:px-52 pb-20">
          <div>
            <img
              src="/Rectangle.png"
              alt="last first Image"
              className="w-full sm:w-[460px] h-auto sm:h-[160px] rounded-2xl"
            />
          </div>
          <div className="pt-1">
            <h3 className="text-black text-[18px] font-extrabold">
              Designing Dashboards
            </h3>
            <h5 className="pt-3 pb-3 text-[18px] text-gray-800">
              <span className="bg-red-400 text-white rounded-3xl py-1 px-2 mx-2">
                2020
              </span>
              Dashboard
            </h5>
            <p className="text-black text-[16px] w-full sm:w-[85%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10 px-4 sm:px-52 pb-20">
          <div>
            <img
              src="/Rectangle 32.png"
              alt="last first Image"
              className="w-full sm:w-[460px] h-auto sm:h-[160px] rounded-2xl"
            />
          </div>
          <div className="pt-1">
            <h3 className="text-black text-[18px] font-extrabold">
              Designing Dashboards
            </h3>
            <h5 className="pt-3 pb-3 text-[18px] text-gray-800">
              <span className="bg-red-400 text-white rounded-3xl py-1 px-2 mx-2">
                2020
              </span>
              Dashboard
            </h5>
            <p className="text-black text-[16px] w-full sm:w-[85%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10 px-4 sm:px-52 pb-20">
          <div>
            <img
              src="/Rectangle 34.png"
              alt="last first Image"
              className="w-full sm:w-[460px] h-auto sm:h-[160px] rounded-2xl"
            />
          </div>
          <div className="pt-1">
            <h3 className="text-black text-[18px] font-extrabold">
              Designing Dashboards
            </h3>
            <h5 className="pt-3 pb-3 text-[18px] text-gray-800">
              <span className="bg-red-400 text-white rounded-3xl py-1 px-2 mx-2">
                2020
              </span>
              Dashboard
            </h5>
            <p className="text-black text-[16px] w-full sm:w-[85%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
