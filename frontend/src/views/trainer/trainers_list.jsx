import { Link } from "react-router-dom";

function listTrainers(data) {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    {data.map((trainer) => {
                        return (
                            <tr key={trainer.id}>
                                <td>{trainer.name}</td>
                                <td><Link to={`/trainers/${trainer.id}`}>Show</Link></td>
                                <td><a>Edit</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>    
    )
}

export default listTrainers;