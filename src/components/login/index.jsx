import { useState } from 'react'
import './index.css'

export default function Login() {

/*
Hay que guardar el usuario que ha iniciado sesion 
en el localStorage con su atributo de id
*/

    const URL = "http://localhost:8080"
    
    const [userid, setUserId] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    //Variable to show the state to the user:
    const [inputsResponse, setInputsResponse] = useState("")

    function checkUser() {
        const userInfo = {
            name,
            password
        }
        //Petition to login with user name and password
        const options={
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(userInfo)
        }
        fetch(URL+"/user/login", options)
        .then(response=>{
            if(response.ok){
                setInputsResponse("")
                alert("Welcome "+name)
                return response.json()
            } else{
                setInputsResponse("The data provided are not registered")
                console.error(response.statusText)
            }
        })
        .then(res => {
            setUserId(res.id)
        })
        .catch(error=>console.error(error))
        //GET petition to get user for save in localStorage
        let url = URL+("/user/"+String(userid))
        console.log(url);
        fetch(URL+("/user/"+userid))
        .then(response=>{
            if(response.ok){
                return response.json()
            } else{
                console.error(response.statusText)
            }
        })
        .then(user => {
            localStorage.removeItem('sesUser')
            localStorage.setItem('sesUser', JSON.stringify(user))
        })
        .catch(error=>console.error(error))
    }

    return (
        <div id='login'>
            <h1>Sport Talks</h1>
            <h4>Talk and run</h4>
            <div id='inputs'>
                <label htmlFor="userInput">Introduzca un usuario:</label>
                <input id='userInput' type="text" onChange={(e) => {setName(e.target.value)}}/>
                <label htmlFor="passInput">Introduzca su contraseña:</label>
                <input id='passInput' type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <p>{inputsResponse}</p>
            </div>
            <button id='buttonSubmit' onClick={checkUser}>Go to Talk</button>
        </div>
    )
}