import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.png";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/upload");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-12 lg:gap-8 lg:py-64 lg:px-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white mb-4">
              Scholar Sphere
            </h1>
            <p className="font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-6 max-w-2xl">
              Seamless publication summaries and reports tailored to bolster
              your academic profile and catalyze your career. Efficient synopses
              that come in handy when applying for tenure or grants, showcasing
              your research expertise at the forefront.
            </p>
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="mt-20">
        <marquee>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="3
            0"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1e88e5"
              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
            ></path>
            <path
              fill="#1565c0"
              d="M35,16.592v-3.878L37,11H27l0.917,1.833c-1.236,0-2.265,0-2.265,0S19.095,13,19.095,18.748	c0,5.752,5.732,5.088,5.732,5.088s0,0.865,0,1.453c0,0.594,0.77,0.391,0.864,1.583c-0.388,0-7.964-0.208-7.964,4.998	s6.679,4.959,6.679,4.959s7.722,0.365,7.722-6.104c0-3.871-4.405-5.121-4.405-6.686c0-1.563,3.319-2.012,3.319-5.684	c0-0.823-0.028-1.524-0.149-2.12L34,13.571v3.02c-0.581,0.207-1,0.756-1,1.408v4.5c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5V18	C36,17.348,35.581,16.799,35,16.592z M30.047,31.169c0.131,2.024-1.929,3.811-4.603,3.998c-2.671,0.188-4.946-1.295-5.077-3.316	c-0.133-2.016,1.927-3.805,4.6-3.996C27.641,27.667,29.914,29.152,30.047,31.169z M26.109,22.453	c-1.592,0.451-3.375-1.062-3.982-3.367c-0.604-2.312,0.195-4.543,1.786-4.992c1.593-0.453,3.374,1.059,3.981,3.367	C28.499,19.77,27.702,22.004,26.109,22.453z"
            ></path>
            <path
              fill="#e8eaf6"
              d="M34,16.592V12c0-0.051-0.015-0.097-0.029-0.143L35,11H21l-9,8h5.383	c0.174,5.466,5.715,4.836,5.715,4.836s0,0.865,0,1.453c0,0.594,0.771,0.391,0.865,1.583c-0.388,0-7.964-0.208-7.964,4.998	s6.679,4.959,6.679,4.959s7.721,0.365,7.721-6.104c0-3.871-4.404-5.121-4.404-6.686c0-1.563,3.318-2.012,3.318-5.684	c0-0.971-0.047-1.763-0.232-2.422L33,12.667v3.925c-0.581,0.207-1,0.756-1,1.408v4.5c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5	V18C35,17.348,34.581,16.799,34,16.592z M28.319,31.169c0.131,2.024-1.928,3.811-4.602,3.998c-2.671,0.188-4.946-1.295-5.077-3.316	c-0.133-2.016,1.927-3.805,4.599-3.996C25.914,27.667,28.187,29.152,28.319,31.169z M24.38,22.453	c-1.591,0.451-3.373-1.062-3.981-3.367c-0.604-2.312,0.194-4.543,1.785-4.992c1.593-0.453,3.374,1.059,3.982,3.367	C26.77,19.77,25.973,22.004,24.38,22.453z"
            ></path>
          </svg>
          <span className="px-32 text-xl font-bold">Google Scholar</span>
          <span className="px-32 text-xl font-bold">IEEE Xplore</span>
          <span className="px-32 text-xl font-bold">ACM</span>
          <span className="px-32 text-xl font-bold">DBLP</span>
        </marquee>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-8">
        <div className="card bg-base-100 shadow-xl">
          <figure className="h-80">
            <img
              src="https://www.discoverphds.com/wp-content/uploads/2020/09/What-is-Research-Purpose-of-Research.png"
              alt="Research"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <p>
              Unravel the full potential of your publication with strengthened
              efficiency and ease of access
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="h-80">
            <img
              src="https://www.contents.ai/wp-content/uploads/2024/05/IA-e-contenuti-il-futuro-del-content-marketing.png"
              alt="Content Marketing"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <p>
              Stand out in the crowd with a cohesive display of your
              publications all in one compiled place
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="h-80">
            <img
              src="https://blog.pixentia.com/hs-fs/hubfs/Using%20People%20Analytics%20to%20Survive%20the%20Great%20Resignation.jpg?width=1200&name=Using%20People%20Analytics%20to%20Survive%20the%20Great%20Resignation.jpg"
              alt="Analytics"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <p>
              With futuristic data-driven insights and decisive action features,
              elevate your automation
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center my-14">
        <div className="carousel rounded-box w-96 mx-16">
          <div className="carousel-item w-full">
            <img
              src={image1}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={image2}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={image3}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={image4}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
        <span className="max-w-2xl">
          Our solution is designed to simplify and streamline the process of
          generating comprehensive publication summaries for academic
          professionals. By leveraging advanced crawling techniques, our tool
          gathers data from popular academic databases like Google Scholar and
          DBLP, providing you with a detailed and customized publication record.
        </span>
      </div>
    </div>
  );
}

export default Home;
