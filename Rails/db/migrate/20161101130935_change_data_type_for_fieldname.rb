class ChangeDataTypeForFieldname < ActiveRecord::Migration
  def change
    change_column(:tournaments, :lat, :decimal)
  end
end
