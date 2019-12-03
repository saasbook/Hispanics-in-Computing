require 'rails_helper'

describe PostsController do
  before(:each) do
    # Global stub for Geocoder
    allow(Geocoder).to receive(:search).and_return(["item"])
  end
  describe "#update" do
    before(:each) do
      User.delete_all

      @email = "foobar@gmail.com"
      @user = User.create!(:first_name => "foo",
                           :last_name => "bar",
                           :email => @email)
      session[:id] = @user.id
    end
    it "updates the user's first_name attribute" do
      post :update, {:current_user => {:first_name => "foofoo"}}
      expect(User.find_by(:email => @email).first_name).to eq("foofoo")
    end
    it "does not update user's email attribute" do
      post :update, {:current_user => {:email => "fakeemail@gmail.com"}}
      expect(User.find(@user.id).email).to eq(@email)
    end
    it "redirects to the user's profile page" do
      post :update, {:current_user => {:first_name => "foo"}}
      expect(response).to redirect_to(get_info_path)
    end
  end
end 
