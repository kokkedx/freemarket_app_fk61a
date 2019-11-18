class Item < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :state
  belongs_to :prefecture
  belongs_to :ship_cost
  belongs_to :ship_date
  belongs_to :ship_delivery

  has_many_attached :images
end
