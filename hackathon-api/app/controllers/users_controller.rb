class UsersController < ApplicationController

  def index
    puts "yerrr"
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    puts "hitting"
    @user = User.new(user_params)
  end

private

def user_params
  params.require(:user).permit(:name)
end



end
