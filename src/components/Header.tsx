import profilePicture from "../assets/profile-img.png"
import handIcon from "../assets/hand-icon.png"
import arrowIcon from "../assets/right-arrow-white.png"
import downloadIcon from "../assets/download-icon.png"
function Header() {
  return (
    <header className="">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 md:relative md:top-6">
        <img src={profilePicture} alt="" className="rounded-full w-32" />
        <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi I'm Anonymus Kil <img src={handIcon} alt="" className="w-6" /></h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">  Frontend Developer based in Nigeria</h1>
        <p className="max-w-2xl mx-auto font-ovo">I am a frontend developer from Nigeria with 7+ months of experience</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a href="#contact" className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2  ">Contact me <img src={arrowIcon} alt="" className="w-4"  /></a>
          <a href="#contact" download className="px-10 py-3 border border-grey-500 rounded-full   text-black flex items-center gap-2 bg-white  ">My resume <img src={downloadIcon} alt="" className="w-4"  /></a>

        </div>
      </div>
    </header>
  )
}

export default Header