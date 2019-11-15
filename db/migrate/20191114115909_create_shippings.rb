class CreateShippings < ActiveRecord::Migration[5.2]
  def change
    create_table :shippings do |t|
      t.string   :name, null:false
      t.string   :cost, null:false
      t.references :prefecture
      t.string   :date, null:false

      t.timestamps
    end
  end
end
