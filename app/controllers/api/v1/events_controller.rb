class Api::V1::EventsController < ApplicationController
  before_action :find_event, only: [:show, :update, :destroy]

  def index
    render json: Event.all
  end

  def show
    if @event
      render json: @event
    else
      render json: { message: "Could not find event", status: 404 }, status: 404
    end
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render json: { message: "Event was not created", status: 500 }, status: 500
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: { message: "Event was not updated", status: 500 }, status: 500
    end
  end

  def destroy
    @event.destroy
    render json: { message: 'Event was destroyed', status: 200 }, status: 200
  end

  private

    def event_params
      params.require(:event).permit(:minutes, :date, :meditation_id, :user_id)
    end

    def find_event
      @event = Event.find_by_id(params[:id])
    end

end
