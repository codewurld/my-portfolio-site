import Navbar from "./components/navbar/Navbar"
import Portfolio from "./components/portfolio/Portfolio"
import Projects from "./components/projects/Projects"

import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu"
import WelcomePage from "./components/welcomepage/Welcomepage"
import SiteMenu from "./components/sitemenu/SiteMenu"
import Home from "./pages/Home"
import About from "./pages/About"
import PortfolioPage from "./pages/Portfolio"
import ContactPage from "./pages/ContactPage"
import Darkmode from "./components/darkmode/Darkmode"

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
      <nav>
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <SiteMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Darkmode />
      </nav>

      <Home />
      <About />
      <PortfolioPage />
      <ContactPage />
    </div >
  );
}

{/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */ }
{/* <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} /> */ }
{/* <SiteMenu openMenu={openMenu} setOpenMenu={setOpenMenu} /> */ }
{/* <Menu /> */ }
// <div className="sections">


// </div>
// <p>App</p>



export default App;