import "./portfolioLists.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "portfolioLists active" : "portfolioLists"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}