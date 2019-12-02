require 'rails_helper'

describe User do
  describe ".valid_user" do
    before(:all) do
      @email = "bob@gmail.com"
    end
    context "given a user who is in the slack group" do
      it "returns true" do
        expect(User).to receive(:slack_member_emails).and_return([@email])
        expect(User.valid_user(@email)).to be true
      end
    end
    context "given a user who is not in the slack group" do
      it "returns false" do
        expect(User).to receive(:slack_member_emails).and_return(["alice@gmail.com"])
        expect(User.valid_user(@email)).to be false
      end
    end
  end
  describe ".validate_and_create" do
    before(:all) do
      @email = "foobar@gmail.com"
      @auth_hash = {:info => {:first_name => "foo",
                              :last_name => "bar",
                              :email => @email}}
    end
    before(:each) do
      # remove all items from the database before each example
      User.delete_all
    end
    context "given a user who is in the slack group" do
      before(:each) do
        allow(User).to receive(:slack_member_emails).and_return([@email])
      end
      it "creates a user object in the database" do
        expect{User.validate_and_create(@auth_hash)}.to change{User.count}.by(1)
      end
      it "returns a user object" do
        info_hash = @auth_hash[:info]
        actual_user = User.validate_and_create(@auth_hash)
        expect(actual_user).to have_attributes(:first_name => info_hash[:first_name], 
                                               :last_name => info_hash[:last_name],
                                               :email => info_hash[:email])
      end
    end
    context "given a user who is not in the slack group" do
      before(:each) do
        allow(User).to receive(:slack_member_emails).and_return([])
      end
      it "saves nothing to the database" do
        expect{User.validate_and_create(@auth_hash)}.to change{User.count}.by(0)
      end
      it "returns nil" do
        expect(User.validate_and_create(@auth_hash)).to be_nil
      end
    end
  end
end
