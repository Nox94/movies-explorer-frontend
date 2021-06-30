import '../../../common.css';
import './portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__heading">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__link link" href="#">
                        Статичный сайт
                        <span className="portfolio__link-arrow">&#129125;</span>
                    </a>
                </li>
                <hr className="portfolio__line" noshade="true" size="1" color="#000000"/>
                <li className="portfolio__list-item">
                    <a className="portfolio__link link" href="#">
                        Адаптивный сайт
                        <span className="portfolio__link-arrow">&#129125;</span>
                    </a>
                </li>
                <hr className="portfolio__line" noshade="true" size="1" color="#000000"/>
                <li className="portfolio__list-item">
                    <a className="portfolio__link link" href="#">
                        Одностраничное приложение
                        <span className="portfolio__link-arrow">&#129125;</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
