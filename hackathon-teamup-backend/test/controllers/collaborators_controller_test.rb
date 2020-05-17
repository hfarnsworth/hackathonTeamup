require 'test_helper'

class CollaboratorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @collaborator = collaborators(:one)
  end

  test "should get index" do
    get collaborators_url, as: :json
    assert_response :success
  end

  test "should create collaborator" do
    assert_difference('Collaborator.count') do
      post collaborators_url, params: { collaborator: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show collaborator" do
    get collaborator_url(@collaborator), as: :json
    assert_response :success
  end

  test "should update collaborator" do
    patch collaborator_url(@collaborator), params: { collaborator: {  } }, as: :json
    assert_response 200
  end

  test "should destroy collaborator" do
    assert_difference('Collaborator.count', -1) do
      delete collaborator_url(@collaborator), as: :json
    end

    assert_response 204
  end
end
