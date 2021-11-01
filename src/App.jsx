
import "./app.scss"
import { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import SiteMenu from "./components/sitemenu/SiteMenu"
import Home from "./pages/Home"
import About from "./pages/About"
import PortfolioPage from "./pages/Portfolio"
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/ContactPage"
import { ThemeContext } from "./context";
import SwiperPortfolio from "./components/swiperportfolio/SwiperPortfolio";


function App() {
  // change state to hide/display menu list
  const [openMenu, setOpenMenu] = useState(false)

  // call ThemeContext
  const theme = useContext(ThemeContext)
  // call darkmode state in useContext from context.js file
  const darkMode = theme.state.darkMode

  return (
    // when in darkmode change background colour to dark and text colour to white
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }} >
      <Router>
        <nav>
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <SiteMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/skills">
            <SwiperPortfolio />
          </Route> */}
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/my-story">
            <About />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>

    </div >
  );
}




export default App;