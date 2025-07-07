import userImage from "../assets/user-image.png"
import codeIcon from "../assets/code-icon.png"
import educationIcon from "../assets/edu-icon.png"
import projectIcon from "../assets/project-icon.png"
import vsCodeIcon from "../assets/vscode.png"
import fireBase from "../assets/firebase.png"
import mongoDB from "../assets/mongodb.png"
import figma from "../assets/figma.png"
import git from "../assets/git.png"
import circularText from "../assets/circular-text.png"
import devIcon from "../assets/dev-icon.png"
function About() {
  return(
    <section id="about" className="">
     <div className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo ">Introduction</h4>
        <h2 className="text-center text-5xl font-ovo">About Me</h2>
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
            <div className="max-w-max mx-auto relative">
                <img src={userImage} alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />
                <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                <img src={circularText} alt="" className="w-full animate-spin_slow" />
                <img src={devIcon} alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
            </div>
            <div className="flex-1">
              <p className="mb-10 max-w-2xl">I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img src={codeIcon} alt="" className="w-7 mt-3" />
                     <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
                     <p className="text-gray-600 text-sm dark:text-white" >HTML, CSS, JavaScript, React.JS, Next JS, TypeScript</p>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img src={educationIcon} alt="" className="w-7 mt-3" />
                     <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
                     <p className="text-gray-600 text-sm dark:text-white">N/A</p>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img src={projectIcon} alt="" className="w-7 mt-3" />
                     <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
                     <p className="text-gray-600 text-sm dark:text-white">Built more than 20 projects</p>
                </li>
              </ul>
              <h4 className="my-6 text-gray-700 font-ovo dark:text-white">Tools I use</h4>
              <ul className="flex items-center gap-3 sm:gap-5">
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                    <img src={vsCodeIcon} alt="" className="w-5 sm:w-7" />
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                    <img src={fireBase} alt="" className="w-5 sm:w-7" />
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                    <img src={mongoDB} alt="" className="w-5 sm:w-7" />
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                    <img src={figma} alt="" className="w-5 sm:w-7" />
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                    <img src={git} alt="" className="w-5 sm:w-7" />
                </li>
              </ul>
            </div>
        </div>
     </div>
    </section>

  );
}

export default About;
