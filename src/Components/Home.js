import React from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="border-t-2 border-b-2 mt-20">
        <marquee>
          <span className="px-32 text-xl font-bold">Google Scholar</span>
          <span className="px-32 text-xl font-bold">IEEE Xplore</span>
          <span className="px-32 text-xl font-bold">ACM</span>
          <span className="px-32 text-xl font-bold">DBLP</span>
        </marquee>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.discoverphds.com/wp-content/uploads/2020/09/What-is-Research-Purpose-of-Research.png"
              alt="Research"
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
          <figure>
            <img
              src="https://www.contents.ai/wp-content/uploads/2024/05/IA-e-contenuti-il-futuro-del-content-marketing.png"
              alt="Content Marketing"
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
          <figure>
            <img
              src="https://blog.pixentia.com/hs-fs/hubfs/Using%20People%20Analytics%20to%20Survive%20the%20Great%20Resignation.jpg?width=1200&name=Using%20People%20Analytics%20to%20Survive%20the%20Great%20Resignation.jpg"
              alt="Analytics"
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
    </div>
  );
}

export default Home;
