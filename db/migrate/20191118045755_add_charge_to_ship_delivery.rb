class AddChargeToShipDelivery < ActiveRecord::Migration[5.2]
  def change
    add_column :ship_deliveries, :charge, :integer
  end
end
