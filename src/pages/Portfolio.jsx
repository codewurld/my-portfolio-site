import NewPortfolio from "../components/newportfolio/NewPortfolio";
import NewPortfolioList from "../components/newportfoliolist/NewPortfolioList";
import './portfoliopage.css'

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <NewPortfolioList />
        </div>
    );
}

export default PortfolioPage;