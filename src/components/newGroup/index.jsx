//Styles:
import './index.css'
//Components:
import SelectSport from "../selectSport";
//React:
import { useState, useEffect } from 'react';

export default function NewGroup({URL}) {
    
    const userLS = JSON.parse(localStorage.getItem("sesUser"))

    const [groupname, setGroupName] = useState("")
    const [sportsArray, setSportsArray] = useState([])//this is a variable to save array info from sports
    const [sports, setSports] = useState("")
    const [inputsResponse, setInputsResponse] = useState("")

    //Making good format for sports:  
    useEffect(() => {
        const sportsString = sportsArray.map((s) => s.value).join(", ")
        setSports(sportsString)
    }, [sportsArray])

    function createGroup() {
        //New group information:
        const sendReq = {
            admin: Number(userLS.id),
            name: groupname,
            sports
        }
        //Petition to regist/create newGroup
        const options={
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(sendReq)
        }
        fetch(`${URL}/group/create`, options)
        .then(response=>{
            if(response.ok){
                alert("Se ha registrado un nuevo grupo en la plataforma")
                setInputsResponse("")
            } else{
                setInputsResponse("The data provided are not registered")
                console.error(response.statusText)
            }
        })
        .catch(error=>console.error(error))
        //Adding admin user to the new group:
        //Admin user information:
        const sendUserReq = {
            userid: Number(userLS.id),
            groupname
        }
        //Petition to regist/create newGroup
        const options2={
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(sendUserReq)
        }
        fetch(`${URL}/group/addUser`, options2)
        .then(response=>{
            if(response.ok){
            } else{
                console.error(response.statusText)
            }
        })
        .catch(error=>console.error(error))
    }

    return(
        <main>
            <h3>Create new Group</h3>
            <div id='inputs'>
                <label htmlFor="userInput">Enter a name for the group:</label>
                <input id='userInput' type="text" onChange={(e) => {setGroupName(e.target.value)}}/>
                <label htmlFor="passInput">Enter the group's associated sports:</label>
                <SelectSport id="sportsInput" setSportsArray={setSportsArray} />
                <p>{inputsResponse}</p>
                <button id='buttonSubmit' onClick={createGroup}>Create group</button>
            </div>
        </main>
    )
}