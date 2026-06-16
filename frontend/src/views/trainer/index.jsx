import {use, useEffect, useState} from "react";
import listTrainers from "./trainers_list";

function TrainerIndex() {
    let pull_in_index = () => {
        fetch("http://localhost:3000/api/trainers")
        .then((res) => res.json())
        .then((data) => {
            setTrainerList(data);
        })
    }

    const [trainerList, setTrainerList] = useState([]);
    
    useEffect(() => {
        pull_in_index()
    }, []);

    return (
        <>
            <h1>Trainer Index</h1>
            {listTrainers(trainerList,setTrainerList)}
        </>
    )
}
export default TrainerIndex;