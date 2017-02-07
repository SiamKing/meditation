class Api::V1::UsersController < ApplicationController

  def show
    render json: User.first
  end

  def create
    user = User.new(name: params[:name])
    if user.save
      render json: user
    else
      render json: { message: "User was not created", status: 500 }, status: 500
    end
  end

  def update
    user = User.find_by_id(params[:id])
    if user.update(name: params[:name])
      render json: user
    else
      render json: { message: "User was not updated", status: 500 }, status: 500
    end
  end

  def destroy
    user = User.find_by_id(params[:id])
    user.destroy
    render json: { message: 'User was destroyed', status: 200 }, status: 200
  end
end
