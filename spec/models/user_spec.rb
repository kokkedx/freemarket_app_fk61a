require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with testfile created by factorybot" do
    FactoryBot.create(:prefecture)
    user = FactoryBot.build(:user)
    expect(user).to be_valid
  end

  it "is invalid with nickname is blank" do
    FactoryBot.create(:prefecture)
    user = FactoryBot.build(:user)
    user.nickname = ""
    user.valid?
    expect(user.errors.messages[:nickname]).to include('Can not be blank')
  end


end
