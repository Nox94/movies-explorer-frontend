import './pageNotFound.css';
import '../../common.css';
import {Link} from 'react-router-dom';

const violet = {
    color: "#A99CF6"
}

function PageNotFound() {
    return (
        <div className="not-found section">
            <h3 className="not-found__title">
                <span className="not-found__error-code">404</span> Страница не найдена
            </h3>
            <Link className="link not-found__link" to="/" style={violet}>Назад</Link>
        </div>)
}

export default PageNotFound;
