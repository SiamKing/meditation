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

  private

    def meditation_params
      params.require(:meditation).permit(:name, :tradition, :instructions)
    end

    def find_meditation
      @meditation = Meditation.find_by_id(params[:id])
    end

end
