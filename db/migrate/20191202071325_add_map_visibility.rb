class AddMapVisibility < ActiveRecord::Migration
  def change
    add_column :users, :map_visibility, :boolean, default: false
  end
end
