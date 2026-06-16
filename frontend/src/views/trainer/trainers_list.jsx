import { Link } from "react-router-dom";
import { useState } from "react";
import CreateTrainer from "./create";

function listTrainers(data, setTrainerList) {
    const [alert, setAlert] = useState('')
    let delete_trainer = (trainer_id) => {
        fetch(`http://localhost:3000/api/trainers/${trainer_id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((d) => {
            if(d['success']){
                let new_list = data.filter((trainer) => trainer.id !== trainer_id)
                setTrainerList(new_list)
                setAlert(d['message'])
                setTimeout(() => {
                    setAlert("");
                }, 1000);
            }
        })
    }

    let show_alert = () => {
        if(alert !== ''){
            return(
                <>
                    <p style={{color: 'green'}}>{alert}</p>
                </>
            )
        }
    } 

    return (
        <> 
            {CreateTrainer(data, setTrainerList)}
            {show_alert()}
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>SHOW</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                    {data.map((trainer) => {
                        return (
                            <tr key={trainer.id}>
                                <td>{trainer.name}</td>
                                <td><Link to={`/trainers/${trainer.id}`}>Show</Link></td>
                                <td><Link to={`/trainers/${trainer.id}/edit`}>Edit</Link></td>
                                <td><button onClick={()=>{delete_trainer(trainer.id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>    
    )
}

export default listTrainers;