class AddOnMapToUsers < ActiveRecord::Migration
  def change
    add_column :users, :on_map, :boolean, :default => false
  end
end
