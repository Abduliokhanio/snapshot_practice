import { useState, useEffect } from "react";

function CreateTrainer(data, setTrainerList){
    const[newname, setNewName ] = useState('')
    const[alert, setAlert ] = useState('')
    const[errors, setError ] = useState([])

    let createTrainer = () => {
        fetch(`http://localhost:3000/api/trainers`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                trainer: {
                    name: newname
                }
            })
        })
        .then((r) => r.json())
        .then((d) => {
            if(d['success']){
                setAlert(d['success'])
                setTrainerList([...data, d.trainer])
                setNewName("")
            }
            else{
                setAlert(d['success'])
                setError(d['errors'])
            }
        })
    }

    let show_alert = () => {
        if(alert == true){
            return(<p style={{color: 'green'}}>Success</p>)
        }
        if(alert == false){
            let count = 0
            return errors.map((error) => (
                (<p key={count} style={{color: 'red'}}>{error}</p>)
            )) 
        }
    }

    return (
        <>  
            {show_alert()}
            <input type="text" placeholder="Trainer Name" onChange={(e) => {setNewName(e.target.value)}}/>
            <button onClick={() => {createTrainer()}}>Create</button>
        </>
    )
}

export default CreateTrainer