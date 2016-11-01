class AddWinnerToTournament < ActiveRecord::Migration
  def change
    add_column :tournaments, :winner, :integer
    add_column :tournaments, :runnerup, :integer
  end
end
