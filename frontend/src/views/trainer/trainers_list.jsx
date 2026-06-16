import { Link } from "react-router-dom";

function listTrainers(data) {
    return (
        <>
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
                                <td>Delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>    
    )
}

export default listTrainers;