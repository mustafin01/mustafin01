import { useEffect, useState } from "react";

function Profile({token}) {
    const [app, setApp] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api-help/claims", {
        method: "GET", 
        headers: {
            'Content-type': "application/json",
            "Authorization": `Bearer ${token}`
        }
        })
        .then(data => data.json())
        .then(data => setApp(data.data))
    }, [])

    function delete_app(id){
        fetch(`http://127.0.0.1:8000/api-help/claim/${id}`, {
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
                        <button onClick={() => delete_app(product.id)} className="button1">Удалить</button>
                    </div>
                </>
            )
        })
    }
    return (
        <>
            <h2>Мои заявления: </h2>
            <main className="carts">
                {app_view()}
            </main>
        </>
    );
}
  
export default Profile;
  