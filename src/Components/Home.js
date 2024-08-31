import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold mb-4">Scholar Sphere</h1>
            <p className="text-xl mb-20">
              Seamless publication summaries and reports tailored to bolster
              your academic profile and catalyze your career. Efficient synopses
              that come in handy when applying for tenure or grants, showcasing
              your research expertise at the forefront.
            </p>
            <Link
              to="/upload"
              className="btn btn-secondary btn-lg btn-wide rounded-xl"
            >
              <span>Get Started</span>
              <svg
                className="w-5 h-5 relative -translate-y-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* different color for top and bottom border style={{borderTopColor: "#4A90E2", borderBottomColor: "#E94E77"}}  */}
      <div className="border-t-2 border-b-2 mt-20">
        <marquee>
          <span className="px-32 text-xl font-bold">Google Scholar</span>
          <span className="px-32 text-xl font-bold">IEEE Xplore</span>
          <span className="px-32 text-xl font-bold">ACM</span>
          <span className="px-32 text-xl font-bold">DBLP</span>
        </marquee>
      </div>

      <div className="flex flex-row justify-center items-center p-10">
        <div className="flex flex-col">
          <span className="text-2xl bg-accent text-white p-3 rounded-lg">
            Your research expedition, amplified.
          </span>
          <span className="max-w-96 text-lg mt-2">
            Unravel the full potential of your publication of your publications
            with strengthened efficiency and ease of access
          </span>
        </div>
        <img
          className="max-w-96 max-h-96 mx-5"
          src="https://www.discoverphds.com/wp-content/uploads/2020/09/What-is-Research-Purpose-of-Research.png"
        />
      </div>
      <div className="flex flex-row justify-center items-center p-10">
        <img
          className="max-w-96 max-h-96 mx-5"
          src="https://www.contents.ai/wp-content/uploads/2024/05/IA-e-contenuti-il-futuro-del-content-marketing.png"
        />
        <div className="flex flex-col">
          <span className="text-2xl bg-accent text-white p-3 rounded-lg">
            Heighten your visibility
          </span>
          <span className="max-w-96 text-lg mt-2">
            Stand out in the crowd by a cohesive display of your publications
            all at one compiled place
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-10">
        <div className="flex flex-col">
          <span className="text-2xl bg-accent text-white p-3 rounded-lg">
            Unleash your research connoisseur
          </span>
          <span className="max-w-96 text-lg mt-2">
            With the futuristic data-driven insights and decisive action
            features, elevate your automated
          </span>
        </div>
        <img
          className="max-w-96 max-h-96 mx-5"
          src="https://blog.pixentia.com/hs-fs/hubfs/Using%20People%20Analytics%20to%20Survive%20the%20Great%20Resignation.jpg?width=1200&name=Using%20People%20Analytics%20to%20Survive%20the%20Great%20Resignation.jpg"
        />
      </div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Home;
