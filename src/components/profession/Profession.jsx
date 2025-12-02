import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "End User IT Support",
    description:
      "Desktop and laptop configuration, operating system installation, basic hardware repairs, printer setup, and remote assistance",
  },
  // {
  //   id: 2,
  //   title: "User Interface (UI)",
  //   description:
  //     "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
  // },
  {
    id: 3,
    title: "Systems and Networks",
    description:
      "Server and network setup, configuration and maintenance, security management, and troubleshooting connectivity issues",
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
