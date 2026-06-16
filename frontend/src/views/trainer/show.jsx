import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TrainerShow() {
    const params = useParams();
    const [trainer, setTrainer] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/api/trainers/${params['id']}`)
        .then((r) => r.json())
        .then((d) => {
            setTrainer(d)
        })
    }, [])

    return(
        <>
            <p>Showing Trainer</p>

            <p>id: {trainer.id}</p>
            <p>name: {trainer.name}</p>

            <Link to={"/trainers"}>Back to trainers</Link>
        </>
    )
}

export default TrainerShow