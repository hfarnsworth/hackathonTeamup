class TeamMembersController < ApplicationController
  before_action :set_team_member, only: [:destroy]


  # POST /team_members
  def create
    @team_member = TeamMember.new(team_member_params)

    if @team_member.save
      render json: @team_member, status: :created, location: @team_member
    else
      render json: @team_member.errors, status: :unprocessable_entity
    end
  end

  # DELETE /team_members/1
  def destroy
    @team_member.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team_member
      @team_member = TeamMember.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def team_member_params
      params.require(:team_member).permit(:team_id, :collaborator_id )
    end
end
