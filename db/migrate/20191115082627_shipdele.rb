class Shipdele < ActiveRecord::Migration[5.2]
  def change
    drop_table :shippings
  end
end
