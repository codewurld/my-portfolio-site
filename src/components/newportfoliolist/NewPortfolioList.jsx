import NewPortfolio from '../newportfolio/NewPortfolio';
import './newportfoliolist.css'
import { portfolioList } from '../../data'
import { useContext } from 'react';
import { ThemeContext } from "../../context"

const NewPortfolioList = () => {

    // call ThemeContext
    const theme = useContext(ThemeContext)
    // call darkmode state in useContext from context.js file
    const darkMode = theme.state.darkMode

    return (
        <div className="portfolio-list">
            <div className="portfolio-listText" >
                <h1 className="portfolio-listTitle" style={{ color: darkMode && "#fff" }}>Portfolio</h1>
                <h2 className="portfolio-listSubtitle" style={{ color: darkMode && "#fff" }}>Recent Projects</h2>
            </div>
            <div className="portfolio-listItems">
                {portfolioList.map((portfolio) => (
                    <NewPortfolio className="portfolio-item-img" key={portfolio.id} title={portfolio.title} img={portfolio.img} link={portfolio.link} description={portfolio.description} tools={portfolio.tools} github={portfolio.github} />
                ))}


            </div>
        </div >
    );
}

export default NewPortfolioList;