class Api::PokemonsController < ApplicationController
    def index
        render json: Pokemon.all
    end

    def create
        if pokemon = Pokemon.create(pokemon_params.merge(trainer_id: Trainer.last.id))
            render json: { success: true, pokemon: pokemon }
        end 
    end

    def show
        render json: Pokemon.find(pokemon_id_param)
    end

    def update
        pokemon = Pokemon.find(pokemon_params[:id])
        if pokemon.update(pokemon_params)
            render json: pokemon
        else
            render json: pokemon.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
    end

    private

    def pokemon_id_param
        params[:id].to_i
    end

    def pokemon_params
        params.require(:pokemon).permit(:id, :name, :trainer_id)
    end
end
