import '../../common.css';
import './register.css';
import Form from "../Form/Form.js";

function Register(props) {
    return (
        <section className="register section">
            <Form onSubmit={props.onSubmit} values={props.values} isValid={props.isValid}
                  errors={props.errors} onChangeInput={props.onChangeInput}/>
        </section>
    )
}

export default Register;
