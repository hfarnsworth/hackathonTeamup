class CollaboratorsController < ApplicationController
  before_action :set_collaborator, only: [:show, :update, :destroy]

  # GET /collaborators
  def index
    @collaborators = Collaborator.all

    render json: @collaborators
  end

  # GET /collaborators/1
  def show
    render json: @collaborator
  end

  # POST /collaborators
  def create
    @collaborator = Collaborator.new(collaborator_params)

    if @collaborator.save
      render json: @collaborator, status: :created, location: @collaborator
    else
      render json: @collaborator.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /collaborators/1
  def update
    if @collaborator.update(collaborator_params)
      render json: @collaborator
    else
      render json: @collaborator.errors, status: :unprocessable_entity
    end
  end

  # DELETE /collaborators/1
  def destroy
    @collaborator.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_collaborator
      @collaborator = Collaborator.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def collaborator_params
      params.fetch(:collaborator, {})
    end
end
