class CreateShipDeliveries < ActiveRecord::Migration[5.2]
  def change
    create_table :ship_deliveries do |t|
      t.string    :name,          null:false
    end
  end
end
