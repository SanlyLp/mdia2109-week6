import {useState} from "react"
import start from "./start"


export default function Survey(){
    const [name, setName] = useState('')
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);
    return(
        <>
<div>
    <div style={{display: isActiveOne ? "block" : "none"}}>
        <h1>What is your name?</h1>
        <input
            value={name}
            onChane = {event => setName(event.target.value)}
            placeholder = "enter name"
            type = "text"
            />

    </div>
    <div style={{display}}>

    </div>
</div>
        </>
    )
}
