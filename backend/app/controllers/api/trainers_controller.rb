class Api::TrainersController < ApplicationController
    def index
        render json: Trainer.all
    end
end