import logo from "../assets/logo.png";
import mailIcon from "../assets/mail_icon.png";
function Footer() {
  return (
    <section className="mt-20">
      <div className="text-center">
        <img src={logo} alt="" className="w-36 mx-auto mb-2 " />
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mailIcon} alt="" className="w-6" />
          navadesignz11@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Anonymus Kil. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a href="https://github.com/AnonymusKil">Github</a></li>
            <li><a href="https://x.com/lfcnava3?s=21">Twitter</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
