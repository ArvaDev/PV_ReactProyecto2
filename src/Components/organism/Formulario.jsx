import { useState } from 'react';
import './Formulario.css';
import Button from '../atoms/button';
import Input from '../atoms/Input';

function Formulario() {

    const [user, setUser] = useState('');

    const handlerChangeUser = (e) => {
        setUser(e.target.value);
    }

    const validar = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailRegex.test(user)) {
            alert(user + ' Es un correo valido: ');
        } else {
            alert(user + ' No es un correo valido: ');
        }
    }

    return (
        <div className="FormContainer">
            <span><h1>Login</h1></span>
            <Input placeholder="User" id="userID" onChange={handlerChangeUser}/>
            <Button text="send" onClick={validar}/>            
        </div>
    );
}

export default Formulario;