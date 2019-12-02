class ChangeEmailColumnInUsers < ActiveRecord::Migration
  def change
    change_column_null(:users, :email, false)
    change_column(:users, :email, :string, :unique => true)
  end
end
