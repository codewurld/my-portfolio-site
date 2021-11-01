import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <p>© {new Date().getFullYear()}, Shola Quadri</p>

                <a href="https://github.com/codewurld/" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>

                <LinkedInIcon />
                <TwitterIcon />
            </footer>
        </div>
    );
}

export default Footer;
<div className="footer-container">
    <footer>

    </footer>
</div>