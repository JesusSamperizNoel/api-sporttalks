import { useEffect, useState, useCallback } from 'react'
//Styles:
import './index.css'

export default function Aside({setMessages, reload}) {

    const userLS = JSON.parse(localStorage.getItem("sesUser"))

    const URL = "http://localhost:8080"

    const [talks, setTalks] = useState([]) 

    const getTalks = useCallback(() => {
        //GET petition to get Talks
        fetch(`${URL}/user/talks/${userLS.id}`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else{
                console.error(response.statusText)
            }
        })
        .then(responseTalks => {
            setTalks(responseTalks)
        })
        .catch(error=>console.error(error))
    }, [userLS.id])    

    useEffect(() => {
        getTalks()
    }, [getTalks])

    const showTalk = useCallback((e) => {
        if (e.target.type === 'user') {
            //GET petition to get USER Talk MESSAGES
            fetch(`${URL}/message/user/${userLS.id}/${e.target.id}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                } else{
                    console.error(response.statusText)
                }
            })
            .then(mess => {
                setMessages(mess)
                const talkInfo = {
                    talkType: 'user',
                    talkId: e.target.id
                }
                localStorage.removeItem('selectedTalk')
                localStorage.setItem('selectedTalk', JSON.stringify(talkInfo))
            })
            .catch(error=>console.error(error))
        } else {
            //GET petition to get GROUP Talk MESSAGES
            fetch(`${URL}/message/group/${userLS.id}/${e.target.id}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                } else{
                    console.error(response.statusText)
                }
            })
            .then(mess => {
                setMessages(mess)
                const talkInfo = {
                    talkType: 'group',
                    talkId: e.target.id
                }
                localStorage.removeItem('selectedTalk')
                localStorage.setItem('selectedTalk', JSON.stringify(talkInfo))
            })
            .catch(error=>console.error(error))
        }
    }, [reload])

    return(
        <div id='aside'>
        <h3>New Talk</h3>
        <div id="newTalks">
            <button className="newTalkButton"><span>+ New Gruop </span></button>
            <button className="newTalkButton"><span>+ New Talk </span></button>
        </div>
        <h3>Talks</h3>
        <div id="talks">
            { talks[0] ? ( //if true:
                <>
                {
                    talks.map((t, index) => (
                    <button id={t.id} type={t.type} key={index} onClick={showTalk} className="talkButton">{t.name}</button>
                    ))
                }
                </>
            ) : ( //if else:
                <p>Start new Talk!</p>
            )}
        </div>
    </div>
    )
}