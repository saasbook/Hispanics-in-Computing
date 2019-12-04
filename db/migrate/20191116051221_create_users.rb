class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :location
      t.string :country_of_origin

      t.timestamps null: false
    end
  end
end
