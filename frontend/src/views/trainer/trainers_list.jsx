function listTrainers(data) {
    return (
        <>
            <ol>
                {data.map((trainer) => {
                    return <li key={trainer.id}>{trainer.name}</li>
                })}
            </ol>
        </>    
    )
}

export default listTrainers;