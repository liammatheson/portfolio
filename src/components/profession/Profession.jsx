import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "IT Support Specialist",
    description:
      "Setting up desktops and laptops, installing operating systems, performing basic hardware repairs, configuring printers, and providing remote assistance.",
  },
  {
    id: 3,
    title: "Network & Systems Administrator",
    description:
      "Managing server and network setup, maintaining configurations, overseeing security, and troubleshooting connectivity issues.",
  },
  {
    id: 4,
    title: "Software Developer",
    description:
      "Writing, testing, and maintaining code for applications, debugging issues, and collaborating on software solutions using modern programming languages.",
  },
];


const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Areas of expertise</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am a second-year IT Programming student at NSCC, focused on developing practical programming skills and building software.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I enjoy working on projects that require creative problem solving, and I am developing experience through coursework and personal projects.
          </p>
        </div>
        {/* <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a> */}
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
