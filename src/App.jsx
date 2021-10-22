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

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
      <Home />
      <About />
    </div>
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