class Api::TrainersController < ApplicationController
    def index
        render json: Trainer.all
    end

    def show
        render json: Trainer.find_by(id: trainer_id_param)
    end

    def update
        trainer = Trainer.find_by(id: trainer_id_param)
        if trainer.update(trainer_params)
            render json: { success: true, trainer: trainer }
        else
            render json: { success: false, errors: trainer.errors.full_messages }, status: :unprocessable_entity
        end 
    end 

    def destroy
    end 

    private

    def trainer_id_param
        params[:id].to_i
    end

    def trainer_params
        params.require(:trainer).permit(:name) 
    end
end