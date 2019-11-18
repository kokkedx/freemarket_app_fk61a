class AddColumnToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :ship_delivery_id, :integer
  end
end
