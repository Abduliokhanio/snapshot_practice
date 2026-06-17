class Api::PokemonsController < ApplicationController
    def index
        render json: Pokemon.all
    end

    def create
    end

    def show
    end

    def update
    end

    def destroy
    end
end
