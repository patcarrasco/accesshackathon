class RelationshipsController < ApplicationController

  def create
    @me = User.find(params[:id])
    @partner = User.find(params[:partner_id])

    @relationship = Relationship.create(user_id: @me.id, followed_user_id: @partner.id )
    render json: @relationship
  end

  # def ghost
  #
  # end

private

  def relationship_params
    params.require(:relationships).permit(:user_one, :user_two)
  end

end
