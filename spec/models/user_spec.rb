require 'rails_helper'

describe User do
  describe ".valid_user" do
    before(:all) do
      @email = "bob@gmail.com"
    end
    context "given a user who is in the slack group" do
      it "returns true" do
        expect(User).to receive(:slack_member_emails).and_return([@email])
        expect(valid_user(@email)).to be true
      end
    end
    context "given a user who is not in the slack group" do
      it "returns false" do
        expect(User).to recieve(:slack_member_emails).and_return(["alice@gmail.com"])
        expect(valid_user(@email)).to be false
      end
    end
  end
end
