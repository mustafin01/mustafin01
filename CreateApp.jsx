import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApp({token}) {
    const [name, setName] = useState("")
    const [auto_num, setAuto_num] = useState("")
    const [desc, setDesc] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()
    function app_view(){
        fetch("http://127.0.0.1:8000/api-help/claim", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({name, auto_num, desc})
        })
        .then(data => data.json())
        .then(data => {
            if (data.data){
                navigate("/profile")
            } else {
                setErrors(data.error.message)
            }
        })
    }
    return (
        <main>
            <div className="cont2">
                <h1>Заполните все Поля</h1>
                <input type="text" placeholder="Имя" value={name} onChange={(event) => setName(event.target.value)}/>
                <input type="text" placeholder="Номер машины" value={auto_num} onChange={(event) => setAuto_num(event.target.value)}/>
                <input type="text" placeholder="Описание" value={desc} onChange={(event) => setDesc(event.target.value)} />
                <p className="red">{errors}</p>
                <button onClick={app_view} className="button">Создать обьвление</button>
            </div>
        </main>
    );
}
  
export default CreateApp;
  