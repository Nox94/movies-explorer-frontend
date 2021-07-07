import '../../common.css';
import './register.css';
import Form from "../Form/Form.js";

function Register(props) {
const handleSubmit = props.onRegister;
    return (
        <section className="register section">
            <Form onRegisterSubmit={handleSubmit}/>
        </section>
    )
}

export default Register;
