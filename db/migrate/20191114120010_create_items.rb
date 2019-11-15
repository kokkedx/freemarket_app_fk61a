class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string    :name,          null:false
      t.text      :description,   null:false
      t.integer   :price,         null:false
      t.string    :size,          null:false
      t.references :state,        foreign_key: true
      t.references :category,     foreign_key: true
      t.references :shipping,     foreign_key: true

      t.timestamps
    end
  end
end
