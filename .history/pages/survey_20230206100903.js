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
        <h1>What is your nae?</h1>

    </div>
</div>
        </>
    )
}