import './newportfolio.css'


const NewPortfolio = ({ img, link, title, description, tools }) => {
    return (
        <div className="new-portfolio-item">
            {/* browser like design for the containers */}
            <div className="new-portfolio-design">
                <div className="new-portfolio-shape"></div>
                <div className="new-portfolio-shape"></div>
                <div className="new-portfolio-shape"></div>
            </div>
            {/* <a href={link} target="_blank">
                <img src={img} alt="" className="new-portfolio-img" />
            </a> */}
            <div className='new-portfolio-details-container'>
                <p className="new-portfolio-listDescription">
                    {description}</p>
                <p className="new-portfolio-listTools">Built with: {tools}</p>
            </div>

        </div>
    );
}

export default NewPortfolio;