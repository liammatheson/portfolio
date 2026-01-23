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

<div className="flex flex-col sm:flex-row sm:items-start sm:pl-[285px] sm:pr-[565px] sm:h-[200px] gap-4">
  <Introduction />

  <div className="mt-2 sm:mt-0 sm:ml-auto sm:self-end self-center">
    <a
      href="resumeliam.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary btn"
    >
      View Resume
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
        <Certifications />
      </div>
      {/* <HappyClients /> */}
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Home;
