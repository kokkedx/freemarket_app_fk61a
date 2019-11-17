class AddshipCostToItems < ActiveRecord::Migration[5.2]
  def change
    add_reference :items, :ship_cost, foreign_key: true
    add_reference :items, :ship_date, foreign_key: true
  end
end
