//Styles:
import './index.css'
//React:
import { useCallback, useState } from 'react'

export default function NewTalk({URL}) {

    const userLS = JSON.parse(localStorage.getItem("sesUser"))

    const [pattern, setPattern] = useState("")
    const [results, setResults] = useState([])

    function searchUsersResults() {
        //GET petition to get GROUP Talk MESSAGES
        fetch(`${URL}/user/pattern/${pattern}`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else{
                console.error(response.statusText)
            }
        })
        .then(results => {
            results.forEach(r => {
                r.type = 'user'
            })
            setResults(results)
        })
        .catch(error=>console.error(error))
    }

    function searchGroupsResults() {
        //GET petition to get GROUP Talk MESSAGES
        fetch(`${URL}/group/pattern/${pattern}`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else{
                console.error(response.statusText)
            }
        })
        .then(results => {
            results.forEach(r => {
                r.type = 'group'
            })
            setResults(results)
        })
        .catch(error=>console.error(error))
    }

    const startNewTalk = useCallback((e) => {
        const startNewTalkAsync = async () => {
            if (e.target.type === 'user') {
                //New User Talk information:
                const sendReq = {
                    user1: Number(userLS.id),
                    user2: e.target.id
                }
                //Petition to create new users Talk:
                const options={
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(sendReq)
                }
                fetch(`${URL}/user/usertalkuser`, options)
                .then(response=>{
                    if(response.ok){
                        alert("Se ha iniciado una nueva Talk")
                    } else{
                        console.error(response.statusText)
                    }
                })
                .catch(error=>console.error(error))
            } else {
                //New Group Talk information:
                const sendReq = {
                    userid: Number(userLS.id),
                    groupname: e.target.name
                }
                console.log(sendReq);
                //Petition to create new group Talk:
                const options={
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(sendReq)
                }
                fetch(`${URL}/group/addUser`, options)
                .then(response=>{
                    if(response.ok){
                        alert("Se ha iniciado una nueva Talk")
                    } else{
                        console.error(response.statusText)
                    }
                })
                .catch(error=>console.error(error))
            } 
        }
        startNewTalkAsync()              
    }, [URL, userLS.id]) 

    return(
        <main>
            <h3>New Talk</h3>
            <div id="inputs">
                <input type='text' onChange={(e) => setPattern(e.target.value)}></input>
                <div id='buttons'>
                    <button onClick={searchUsersResults}>Search users</button>
                    <button onClick={searchGroupsResults}>Search groups</button>
                </div>    
            </div>
            <div id="results">
                { results[0] ? ( //if true:
                    <>
                    {
                        results.map((t, index) => (
                        <button id={t.id} key={index} type={t.type} name={t.name} onClick={startNewTalk}>{t.name}</button>
                        ))
                    }
                    </>
                ) : ( //if else:
                    <p>Enter a name to search results!</p>
                )}
            </div>
        </main>
    )
}