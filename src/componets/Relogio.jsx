import { useEffect } from "react"
import { useState } from "react"

export default function Relogio (){
    const [time, setTime]= useState (new Date())

    useEffect(()=>{
        const timerID = setInterval(()=> setTime(new Date()), 1000)
        return ()=> clearInterval(timerID)
    },[])
    return(
        <div>
            <h1>Relógio Digital</h1>
            <h2>Fuso horario de Portugal</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}