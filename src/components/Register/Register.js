import '../../common.css';
import './register.css';
import Form from "../Form/Form.js";
import React from "react";
import * as auth from '../Authorization/Authorization.js';
import {useHistory} from 'react-router-dom';

function Register() {
    const history = useHistory();

    function handleSubmit({name, email, password}) {

        auth.register(name, email, password).then((res) => {
            if (!res._id) {
                console.log('Ошибка: при регистрации не пришел _id');
            } else {
                history.push('/signin');
                console.log(res);
            }
        }).catch((e) => {
            console.log(e.message);
        })
    }

    return (
        <section className="register section">
            <Form
                onRegisterSubmit={handleSubmit}
            />
        </section>
    )
}

export default Register;
