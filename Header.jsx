import { Link, useNavigate } from "react-router-dom";

function Header({isAuth, isAdmin, token, setIsAuth, setIsAdmin, setToken}) {
    const navigate = useNavigate()
    function logout_view(){
        fetch("http://127.0.0.1:8000/api-help/logout",{
            method: "GET",
            headers: {
                'Content-type': "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        setIsAuth(false)
        setIsAdmin(false)
        setToken("")
        navigate("/")
    }
    return (
        <>
            <main>
                <div className="cont1">
                    <Link to="/">
                    <h1>Нарушениям.Нет</h1>
                    </Link>
                    <div className="right_header">
                        {isAdmin ? <> <Link className="headers_b" to="/admin">Админ панель</Link> <Link className="headers_b" onClick={logout_view}>Выйти</Link></>: 
                            <>
                                {isAuth ? <>
                                    <Link className="headers_b" to="/profile">Профиль</Link>
                                    <Link className="headers_b" to="/create_app">Добавить заявление</Link>
                                    <Link className="headers_b" onClick={logout_view}>Выйти</Link>
                                
                                </> :   <>
                                    <Link className="headers_b" to="/login">Авторизация</Link>
                                    <Link className="headers_b" to="/reg">Регистрация</Link>
                                </>}
                            </> 
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
  
  export default Header;
  