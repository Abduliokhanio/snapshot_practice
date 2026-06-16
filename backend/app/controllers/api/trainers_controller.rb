class Api::TrainersController < ApplicationController
    def index
        render json: Trainer.all
    end

    def show
        render json: Trainer.find_by(id: trainer_id_param)
    end

    private

    def trainer_id_param
        params[:id].to_i
    end
end