require 'rails_helper'

RSpec.describe "hispanicsincomputing/map.html.erb", type: :view do
  it 'loads the page with header' do
    render
    rendered.should match(/Interactive Members Map/)
  end

  it 'displays user_num' do
    @user_num = 11
    render
    rendered.should match(/Current number of members: 11/)
  end
end
