import { useEffect, useState } from "react";

function Main() {
    const [app, setApp] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api-help/claims")
        .then(data => data.json())
        .then(data => setApp(data.data))
    }, [])
    function app_view(){
        return app.map(product => {
            return (
                <>
                <div className="cart">
                    <h2>{product.auto_num}</h2>
                    <p>{product.name}</p>
                    <p>{product.desc}</p>
                    <h4>Статус : {product.status}</h4>
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
  
export default Main;
  