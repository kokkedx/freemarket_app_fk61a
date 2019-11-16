class AddprefectureToItems < ActiveRecord::Migration[5.2]
  def change
    add_reference :items, :prefecture, foreign_key: true
  end
end
