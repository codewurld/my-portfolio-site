import './newportfolio.css'


const NewPortfolio = ({ img, link, title, github, description, tools }) => {
    return (
        <div className="new-portfolio-item">
            {/* browser like design for the containers */}
            <div className="new-portfolio-design">
                <div className="new-portfolio-shape"></div>
                <div className="new-portfolio-shape"></div>
                <div className="new-portfolio-shape"></div>
                {/* <div className="move"><button>woo</button></div> */}

            </div>

            <img src={img} alt="" className="new-portfolio-img" />
            {/* <button className="live-link-btn">Live Link</button> */}




            {/* <button className="hidden-button">Live Link</button> */}
            {/**/}

            <div className='new-portfolio-details-container'>

                <p className="new-portfolio-listDescription">
                    {description}</p>
                <p className="new-portfolio-listTools">Built with: {tools}</p>
                <a href={link} target="_blank" rel="noreferrer">
                    <button className="site-link" >Live Site</button>
                </a>
                <a href={github}>
                    <button className="git-link" >Github</button>
                </a>

            </div>
        </div>

    );
}

export default NewPortfolio;