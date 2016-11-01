class ChangeDataTypeForFieldname2 < ActiveRecord::Migration
  def change
    change_column(:tournaments, :lng, :decimal)
  end
end
