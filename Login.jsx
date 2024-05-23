import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setToken, setIsAuth, setIsAdmin}) {

    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()

    function login_view(){
        fetch("http://127.0.0.1:8000/api-help/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({login, password})
        })
        .then(data => data.json())
        .then(data => {
            if (data.data){
                navigate("/")
                setToken(data.data.user_token)
                setIsAuth(true)
                if (data.data.isAdmin === true){
                    setIsAdmin(true)
                }
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
                <input type="text" placeholder="Логин" value={login} onChange={(event) => setLogin(event.target.value)}/>
                <input type="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)} />
                <p className="red">{errors}</p>
                <button onClick={login_view} className="button">Авторизироваться</button>
            </div>
        </main>
        </>
    );
}
  
  export default Login;
  