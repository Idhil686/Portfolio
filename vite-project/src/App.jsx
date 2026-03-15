import { Navbar } from "./layout/navbar";
import {Hero} from "@/sections/hero";
import {About} from "@/sections/about";
import {Experience} from "@/sections/experience";
import {Projects} from "@/sections/projects";
import {Contact} from "@/sections/contact";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        
      </main>

    </div>
  
  );

  
}

export default App;
