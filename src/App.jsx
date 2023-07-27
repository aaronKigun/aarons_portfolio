import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#cfd8dc]'>
         <div className='bg-transparent bg-cover bg-no-repeat '>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
