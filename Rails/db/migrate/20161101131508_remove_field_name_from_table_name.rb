class RemoveFieldNameFromTableName < ActiveRecord::Migration
  def change
    remove_column :tournaments, :player_id, :integer
  end
end
