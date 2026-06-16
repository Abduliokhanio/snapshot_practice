class Api::TrainersController < ApplicationController
    def index
        render json: Trainer.all
    end

    def create
        trainer = Trainer.new(trainer_params)
        if trainer.save
            render json: { success: true, trainer: trainer }
        else
            render json: { success: false, errors: trainer.errors.full_messages }, status: :unprocessable_entity
        end
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
        if Trainer.find_by(id: trainer_id_param).destroy
            render json: { success: true, message: "successfully deleted" }
        end 
    end 

    private

    def trainer_id_param
        params[:id].to_i
    end

    def trainer_params
        params.require(:trainer).permit(:name) 
    end
end