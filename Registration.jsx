import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [fio, setFio] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()

    function reg_view(){
        fetch("http://127.0.0.1:8000/api-help/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({fio, email, phone, login, password})
        })
        .then(data => data.json())
        .then(data => {
            if (data.data){
                navigate("/login")
            } else {
                setErrors(data.error.message)
            }
        })
    }
    return (
        <>
            <main>
                <div className="cont2">
                    <h1>Заполните все Поля</h1>
                    <input type="text" placeholder="ФИО" value={fio} onChange={(event) => setFio(event.target.value)}/>
                    <input type="email" placeholder="Почта" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input type="text" placeholder="Логин" value={login} onChange={(event) => setLogin(event.target.value)}/>
                    <input type="text" placeholder="Номер" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                    <input type="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <p className="red">{errors}</p>
                    <button onClick={reg_view} className="button">Зарегистрироваться</button>
                </div> 
            </main>
        </>
    );
}
  
export default Register;
  