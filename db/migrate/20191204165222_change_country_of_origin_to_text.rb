class ChangeCountryOfOriginToText < ActiveRecord::Migration
  def change
    change_column :users, :country_of_origin, :text, default: ""
  end
end
