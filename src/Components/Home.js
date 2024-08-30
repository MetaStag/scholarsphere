import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className=" mt-20 mx-auto text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">Scholar Sphere</h1>
        <p className="text-xl mb-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod egestas dolor, vitae dictum est tempus quis. Phasellus euismod, libero vel vestibulum viverra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod egestas dolor, vitae dictum est tempus quis. Phasellus euismod, libero vel vestibulum viverra</p>
        <Link to="/upload" className="btn btn-error btn-lg btn-wide rounded-xl">
          <span>Get Started</span>
          <svg className="w-5 h-5 relative -translate-y-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </Link>
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
    </div>
  );
}

export default Home;
