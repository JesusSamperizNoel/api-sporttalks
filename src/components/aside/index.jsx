import { useEffect, useState } from 'react'
import './index.css'

export default function Aside() {

    const userLS = JSON.parse(localStorage.getItem("sesUser"))

    const URL = "http://localhost:8080"

    const [userid, setUserId] = useState("")
    const [talks, setTalks] = useState([]) 

    function getTalks() {
        console.log(userLS.id);
        
        setUserId(userLS.id)

        //GET petition to get Talks
        fetch(URL+("/user/talks/"+userid))
        .then(response => {
            if(response.ok){
                console.log(1);
                return response.json()
            } else{
                console.error(response.statusText)
            }
        })
        .then(responseTalks => {
            setTalks(responseTalks)
        })
        .catch(error=>console.error(error))
    }

    useEffect(() => {
        getTalks()
    }, [])

    function showTalk() {
        
    }

    return(
        <div id='aside'>
        <h3>New Talk</h3>
        <div id="newTalks">
            <button className="newTalkButton"><span>+ New Gruop </span></button>
            <button className="newTalkButton"><span>+ New Talk </span></button>
        </div>
        <h3>Talks</h3>
        <div id="talks">
            <button className="talkButton">Grupo 1</button>
            {   
                talks.map((t, index) => {
                    return(
                        <button id={t.id} key={index} onClick={showTalk} className="talkButton">{t.name}</button>
                    )
                })                
            }
        </div>
    </div>
    )
}