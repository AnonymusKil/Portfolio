import About from "./components/About";
import Header from "./components/Header";
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <ThemeProvider>
     <main className="overflow-hidden scroll-smooth font-outfit leading-8 dark:bg-darkTheme dark:text-white">
    <NavBar/>
    <Header/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </main>
    </ThemeProvider>
    

  );
}

export default App;
