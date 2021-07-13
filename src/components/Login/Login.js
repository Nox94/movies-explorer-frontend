import '../../common.css';
import './login.css';
import Form from "../Form/Form.js";

function Login(props) {
    return (
        <section className="login section">
            <Form onSubmit={props.onSubmit} values={props.values} isValid={props.isValid}
                  errors={props.errors} onChangeInput={props.onChangeInput}/>
        </section>
    )
}

export default Login;
