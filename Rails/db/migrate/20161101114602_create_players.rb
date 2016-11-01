class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.integer :ranking
      t.string :image

      t.timestamps null: false
    end
  end
end
