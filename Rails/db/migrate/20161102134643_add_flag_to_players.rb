class AddFlagToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :flag, :string
  end
end
