import { useState } from 'react'
import './index.css'

export default function Aside({URL}) {
    
    const [talks, setTalks] = useState([]) 

    return(
        <aside>
        <h3>New Talk</h3>
        <div id="newTalks">
            <button class="newTalkButton"><span>+ New Gruop </span></button>
            <button class="newTalkButton"><span>+ New Talk </span></button>
        </div>
        <h3>Talks</h3>
        <div id="talks">
            <button class="talkButton">Grupo 1</button>
            <button class="talkButton">Grupo 2</button>
            <button class="talkButton">Grupo 3</button>
            <button class="talkButton">Grupo 4</button>
            <button class="talkButton">Grupo 5</button>
            <button class="talkButton">Grupo 6</button>
            <button class="talkButton">Grupo 7</button>
            <button class="talkButton">Grupo 8</button>
            <button class="talkButton">Grupo 9</button>
            <button class="talkButton">Usuario 1</button>
            <button class="talkButton">Usuario 2</button>
            <button class="talkButton">Usuario 3</button>
            <button class="talkButton">Usuario 4</button>
            <button class="talkButton">Usuario 5</button>
            <button class="talkButton">Usuario 6</button>
            <button class="talkButton">Usuario 7</button>
            <button class="talkButton">Usuario 8</button>
            <button class="talkButton">Usuario 9</button>
            <button class="talkButton">Grupo 1</button>
            <button class="talkButton">Grupo 2</button>
            <button class="talkButton">Grupo 3</button>
            <button class="talkButton">Grupo 4</button>
            <button class="talkButton">Grupo 5</button>
            <button class="talkButton">Grupo 6</button>
            <button class="talkButton">Grupo 7</button>
            <button class="talkButton">Jesus Angel Samperiz Noel</button>
            <button class="talkButton">Grupo 9</button>
            <button class="talkButton">Usuario 1</button>
            <button class="talkButton">Usuario 2</button>
            <button class="talkButton">Usuario 3</button>
            <button class="talkButton">Usuario 4</button>
            <button class="talkButton">Usuario 5</button>
            <button class="talkButton">Usuario 6</button>
            <button class="talkButton">Usuario 7</button>
            <button class="talkButton">Usuario 8</button>
            <button class="talkButton">Usuario 9</button>
        </div>
    </aside>
    )
}