class Api::V1::UsersController < ApplicationController

  before_action :find_user, only: [:show, :update, :destroy]

  def index
    render json: User.all
  end

  def show
    if @user
      render json: @user, include: { events: [:minutes, meditation: [:name]]}
    else
      render json: { message: "Could not find user", status: 404 }, status: 404
    end
  end

  def create
    user = User.new(name: params[:user][:name])
    if user.save
      render json: user
    else
      render json: { message: "User was not created", status: 500 }, status: 500
    end
  end

  def update
    if @user.update(name: params[:name])
      render json: @user
    else
      render json: { message: "User was not updated", status: 500 }, status: 500
    end
  end

  def destroy
    @user.destroy
    render json: { message: 'User was destroyed', status: 200 }, status: 200
  end

  private

    def find_user
      @user = User.find_by_id(params[:id])
    end
end
