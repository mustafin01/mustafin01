import { useEffect, useState } from "react";

function ProfileAdmin({token}) {

    const [app, setApp] = useState([])

    function redact(id, status){
        fetch(`http://127.0.0.1:8000/api-help/admin/${id}`, {
            method: "PATCH", 
        headers: {
            'Content-type': "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({status})
        })
    }
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api-help/claims", {
        method: "GET", 
        headers: {
            'Content-type': "application/json"
        }
        })
        .then(data => data.json())
        .then(data => setApp(data.data))
    }, [])

    function delete_app(id){
        fetch(`http://127.0.0.1:8000/api-help/admin/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        setApp(app.filter(app => app.id !== id))
    }
    function app_view(){
        return app.map(product => {
            return (
                <>
                <div className="cart">
                    <h2>{product.auto_num}</h2>
                    <p>{product.name}</p>
                    <p>{product.desc}</p>
                    <h4>Статус : {product.status}</h4>
                    <div className="display">
                    <button onClick={() => redact(product.id, 1)} className="button2">new</button>
                    <button onClick={() => redact(product.id, 2)} className="button3">agree</button>
                    <button onClick={() => redact(product.id, 3)} className="button4">rejeted</button>
                    </div>
                    <button onClick={() => delete_app(product.id)} className="button1">Удалить</button>
                </div>
                </>
            )
        })
    }
    return (
        <>
        <h2>Все заявления: </h2>
  <main className="carts">
    
    {app_view()}
  </main>
  </>
    );
  }
  
  export default ProfileAdmin;
  