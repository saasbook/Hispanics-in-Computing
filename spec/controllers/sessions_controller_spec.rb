require 'rails_helper'

describe SessionsController do
  describe ".create" do
    context "a valid user was created/found" do
      before(:each) do
        @user = double("User", :id => 1)
        expect(User).to receive(:validate_and_create).and_return(@user)
        get :create
      end
      it "sets session[:id] to user's id" do
        expect(session[:id]).to eq(@user.id)
      end
      it "redirects to the root_path" do
        expect(response).to redirect_to(root_path)
      end
    end
    context "no valid user was created/found" do
      before(:each) do
        expect(User).to receive(:validate_and_create).and_return(nil)
        get :create
      end
      it "does not set session[:id] to user's id" do
        expect(session[:id]).to eq(nil)
      end
      it "redirects to the root_path" do
        expect(response).to redirect_to(root_path)
      end
    end
  end
end
