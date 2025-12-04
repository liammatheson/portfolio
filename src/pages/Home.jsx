import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";


const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          
          {/* <Profile /> */}
        </div>
      </div>

      <div className="flex" style={{ paddingLeft: "285px", alignItems: "flex-start" }}>
        <div>
          <Introduction />
        </div>
        <div className="ml-150 mt-47">
          <a
            href="resumeliam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn"
          >
            View Resume test
          </a>
        </div>
      </div>


      
      {/* <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Blog />
      </div> */}
              
      <div className="bg-soft-white">
        <Profession />
        <Portfolio />
      </div>
      {/* <HappyClients /> */}
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Home;
