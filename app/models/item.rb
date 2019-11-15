class Item < ApplicationRecord
  has_many :seller, class_name:"users"
  has_many :buyer, class_name:"users"
  belongs_to :user
  belongs_to :category
  belongs_to :state
  has_one :ship_cost
  has_one :ship_date

  has_many_attached :images
end
