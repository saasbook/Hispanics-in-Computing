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

  describe ".destory" do
    context "a user was logged in" do
      before(:each) do
        session[:id] = 1
        post :destroy
      end
      it "sets the session[:id] to nil and redirects to the members page" do
        expect(session[:id]).to eq(nil)
        expect(response).to redirect_to(members_path)
      end
    end
    context "a user was not logged in" do
      before(:each) do
        session[:id] = nil
        post :destroy
      end
      it "redirects to the members page" do
        expect(session[:id]).to eq(nil)
        expect(response).to redirect_to(members_path)
      end
    end
  end
end 
