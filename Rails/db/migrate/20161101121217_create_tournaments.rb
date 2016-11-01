class CreateTournaments < ActiveRecord::Migration
  def change
    create_table :tournaments do |t|
      t.string :name
      t.references :player, index: true, foreign_key: true
      t.string :location
      t.integer :lat
      t.integer :lng

      t.timestamps null: false
    end
  end
end
