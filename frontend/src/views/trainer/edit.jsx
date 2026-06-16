import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function TrainerEdit() {
    let params = useParams()
    const [trainer, setTrainer] = useState({})
    const [editedName, setEditedName] = useState({})
    const [alert, setAlert] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/trainers/${params['id']}`)
                .then((r) => r.json())
                .then((d) => {
                    setTrainer(d)
                    console.log(trainer)
                })
    }, [])

    function submit_update() {
        fetch(`http://localhost:3000/api/trainers/${params['id']}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                trainer: {
                    name: editedName
                }
            })
        })
        .then((r) => r.json())
        .then((d) => {
            if(d['success']){
                setTrainer(d['trainer'])
                setAlert(d['success'])
            }else {
                setErrors(d['errors'])
                setAlert(d['success'])
            }
        })
    }

    let alert_message = () => {
        if (alert === true){
            return(<p style={{color: 'green'}}>yay</p>)
        }
        if (alert === false) {
            let count = 0
            return errors.map((error) => (
                (<p key={count} style={{color: 'red'}}>{error}</p>)
            ))
            
        }
    }

    return (
        <>
            <br />
            {alert_message()}
            <input placeholder={trainer.name} type="text" id = "edit_name" onChange={(e) => {setEditedName(e.target.value)}} />
            <button onClick={() => {submit_update()}}>submit</button>
            <br />
            <br />
            <Link to={"/trainers"}>Back to trainers</Link>
        </>
    )
}

export default TrainerEdit;