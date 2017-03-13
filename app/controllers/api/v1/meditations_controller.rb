class Api::V1::MeditationsController < ApplicationController
  before_action :find_meditation, only: [:show, :update, :destroy]

  def index
    render json: Meditation.all
  end

  def show
    if @meditation
      render json: @meditation
    else
      render json: { message: "Could not find meditation", status: 404 }, status: 404
    end
  end

  def create
    meditation = Meditation.new(meditation_params)
    if meditation.save
      render json: meditation
    else
      render json: { message: "Meditation was not created", status: 500 }, status: 500
    end
  end

  def update
    if @meditation.update(meditation_params)
      render json: @meditation
    else
      render json: { message: "Meditation was not updated", status: 500 }, status: 500
    end
  end

  def destroy
    @meditation.destroy
    render json: { message: 'Meditation was destroyed', status: 200 }, status: 200
  end

  private

    def meditation_params
      params.require(:meditation).permit(:name, :tradition, :instructions)
    end

    def find_meditation
      @meditation = Meditation.find_by_id(params[:id])
    end

end
