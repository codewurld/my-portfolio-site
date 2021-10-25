import NewPortfolio from '../newportfolio/NewPortfolio';
import './newportfoliolist.css'
import { portfolioList } from '../../data'


const NewPortfolioList = () => {
    return (
        <div className="portfolio-list">
            <div className="portfolio-listText">
                <h1 className="portfolio-listTitle">Portfolio</h1>
                <h2 className="portfolio-listSubtitle">Recent Projects</h2>
                {/* <p className="portfolio-listDescription">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat harum esse ab, voluptatem quo. Eius obcaecati, amet nemo esse velit quia fugit at nisi vero earum commodi odit quo.</p> */}
            </div>
            <div className="portfolio-listItems">
                {portfolioList.map((portfolio) => (
                    <NewPortfolio key={portfolio.id} title={portfolio.title} img={portfolio.img} link={portfolio.link} description={portfolio.description} tools={portfolio.tools} />
                ))}


            </div>
        </div >
    );
}

export default NewPortfolioList;