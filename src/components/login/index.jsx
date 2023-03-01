import './index.css'

export default function Login() {
    


    return (
        <>
            <h1>Sport Talks</h1>
            <h4>Talk and run</h4>
            <div id='inputs'>
                <label htmlFor="userInput">Introduzca un usuario:</label>
                <input id='userInput' type="text" />
                <label htmlFor="passInput">Introduzca su contraseña:</label>
                <input id='passInput' type="password" />
            </div>
        </>
    )
}