class CreateShipCosts < ActiveRecord::Migration[5.2]
  def change
    create_table :ship_costs do |t|
      t.string    :name,          null:false
      
      t.timestamps
    end
  end
end
