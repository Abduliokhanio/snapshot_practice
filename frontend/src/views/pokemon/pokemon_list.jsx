function PokemonList(data){

    return(
        <>
            <ol>
                {data.map((pokemon)=>{
                    return <li key={pokemon.id}>{pokemon.name}</li>
                })}
            </ol>
        </>
    )

}

export default PokemonList;