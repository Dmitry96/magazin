require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get policy" do
    get :policy
    assert_response :success
  end

  test "should get user_agreement" do
    get :user_agreement
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

end
