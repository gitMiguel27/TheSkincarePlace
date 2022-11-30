class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :link
      t.string :image
      t.string :concern
      t.string :company
      t.string :name
      t.integer :price
      t.belongs_to :skin_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
