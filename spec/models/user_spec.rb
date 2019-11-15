require 'rails_helper'

RSpec.describe User, type: :model do

  it "is valid with testfile created by factorybot" do
    FactoryBot.create(:prefecture)
    user = FactoryBot.build(:user)
    expect(user).to be_valid
  end

  it "is invalid when nickname is blank" do
    FactoryBot.create(:prefecture)
    user = FactoryBot.build(:user)
    user.nickname = ""
    user.valid?
    expect(user.errors.messages[:nickname]).to include "can't be blank"
  end

  it "is invalid when mail address is blank" do
    FactoryBot.create(:prefecture)
    user = FactoryBot.build(:user)
    user.email = ""
    user.valid?
    expect(user.errors.messages[:email]).to include "can't be blank"
  end

  it "is invalid when mail address doesn't have correct format" do
    FactoryBot.create(:prefecture)
    user = FactoryBot.build(:user)
    user.email = Faker::Games::SuperSmashBros.fighter
    user.valid?
    expect(user.errors.messages[:email]).to include "is invalid"
  end


end
