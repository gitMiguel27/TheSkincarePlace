class CreateSkinTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :skin_types do |t|
      t.string :name
      t.text :body
      t.string :image

      t.timestamps
    end
  end
end
