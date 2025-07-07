import sendIcon from "../assets/send-icon.png";
import arrow from "../assets/right-arrow-bold.png"
const projects = [
  {
    id: 1,
    title: "Frontend Project",
    category: "Web Design",
    bg: "/work-1.png", // images are in public/
  },
  {
    id: 2,
    title: "Geo based App",
    category: "Mobile App",
    bg: "/work-2.png",
  },
  {
    id: 3,
    title: "Photography Site",
    category: "Web Design",
    bg: "/work-3.png",
  },
  {
    id: 4,
    title: "UI/UX Designing",
    category: "UI/UX Design",
    bg: "/work-4.png",
  },
];

function MyWork() {
  return (
    <section id="work" className="w-full px-[12%] py-16 scroll-mt-20 bg-white dark:bg-darkTheme">
      <h4 className="text-center mb-2 text-lg text-gray-500 font-ovo dark:text-white">My Portfolio</h4>
      <h2 className="text-center text-4xl font-bold mb-4 font-ovo dark:text-white">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-12 text-gray-600 font-ovo dark:text-white">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {projects.map(({ id, title, category, bg }) => (
          <div
            key={id}
            style={{ backgroundImage: `url(${bg})` }}
            className="aspect-square rounded-lg bg-no-repeat bg-cover bg-center relative group overflow-hidden transition-all duration-500 hover:scale-[1.03] cursor-pointer shadow-md"
          >
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 bg-white rounded-md py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7 shadow-md">
              <div>
                <h2 className="font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600">{category}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300 transition-all duration-300">
                <img src={sendIcon} alt="Send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
        <a href="#" className="w-max-content flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white">Show More <img src={arrow} alt="" className="w-4" /></a>
      </div>
    </section>
  );
}

export default MyWork;
