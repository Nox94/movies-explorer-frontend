import '../../../common.css';
import './portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__heading">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__link link" href="https://github.com/Nox94/how-to-learn">
                        Статичный сайт
                        <span className="portfolio__link-arrow">&#129125;</span>
                    </a>
                </li>
                <hr className="portfolio__line" noshade="true" size="1" color="#000000"/>
                <li className="portfolio__list-item">
                    <a className="portfolio__link link" href="https://nox94.github.io/russian-travel/">
                        Адаптивный сайт
                        <span className="portfolio__link-arrow">&#129125;</span>
                    </a>
                </li>
                <hr className="portfolio__line" noshade="true" size="1" color="#000000"/>
                <li className="portfolio__list-item">
                    <a className="portfolio__link link" href="https://github.com/Nox94/react-mesto-api-full">
                        Одностраничное приложение
                        <span className="portfolio__link-arrow">&#129125;</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
