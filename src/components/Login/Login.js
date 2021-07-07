import '../../common.css';
import './login.css';
import Form from "../Form/Form.js";

function Login(props) {
    const handleSubmit = props.onLogin;
    return (
        <section className="login section">
            <Form onLoginSubmit={handleSubmit}/>
        </section>
    )
}

export default Login;
