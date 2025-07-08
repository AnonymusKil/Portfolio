import webIcon from "../assets/web-icon.png";
import mobileIcon from "../assets/mobile-icon.png";
import behance from "../assets/ui-icon.png";
import imageIcon from "../assets/graphics-icon.png";
import rightArrow from "../assets/right-arrow.png";

// Service data
const services = [
  {
    title: "Web Design",
    icon: webIcon,
    description: "Creating stunning and responsive web interfaces tailored to user experience.",
  },
  {
    title: "Mobile Friendly UI",
    icon: mobileIcon,
    description: "Building adaptive mobile-first designs that scale beautifully across devices.",
  },
  {
    title: "UI/UX Design",
    icon: behance,
    description: "Designing intuitive user flows and wireframes that deliver delightful interactions.",
  },
  {
    title: "Graphics Design",
    icon: imageIcon,
    description: "Branding, logos, social media graphics that align with your visual identity.",
  },
];

// No props here
function Services() {
  return (
    <section id="services" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg text-gray-500 font-ovo dark:text-white">What I Offer</h4>
      <h2 className="text-center text-4xl font-bold mb-4 font-ovo dark:text-white">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-12 text-gray-600 font-ovo dark:text-white">
        I am a frontend developer based in Nigeria with experience designing performant, accessible, and beautiful UIs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, icon, description }, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl px-8 py-12 hover:shadow-[4px_4px_0_#000] dark:hover:bg-[#2a004a] dark:hover:shadow-[4px_4px_0_#fff] hover:border-black cursor-pointer bg-white hover:-translate-y-1 transition-all duration-300 dark:bg-transparent "
          >
            <img src={icon} alt={title} className="w-10 mb-4" />
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed dark:text-white">{description}</p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5 font-medium text-black dark:text-white">
              Read More <img src={rightArrow} alt="arrow" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
