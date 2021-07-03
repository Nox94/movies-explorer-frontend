import '../../common.css';
import './login.css';
import Form from "../Form/Form.js";
import * as auth from "../Authorization/Authorization";
import {useHistory} from "react-router-dom";

function Login() {
    const history = useHistory();

    function handleSubmit({email, password}) {
        auth.login(email, password).then((res) => {
            //в результ приходит токен
            if (!res) {
                throw new Error();
            } else {
                history.push('/movies');
            }
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <section className="login section">
            <Form
            onLoginSubmit={handleSubmit}
            />
        </section>
    )
}

export default Login;

// name: "qqq", email: "qqq@ya.ru"
