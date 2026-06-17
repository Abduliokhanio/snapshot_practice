class Api::PokemonsController < ApplicationController
    def index
        render json: Pokemon.all
    end

    def create
    end

    def show
        render json: Pokemon.find(pokemon_id_param)
    end

    def update
    end

    def destroy
    end

    private

    def pokemon_id_param
        params[:id].to_i
    end
end
