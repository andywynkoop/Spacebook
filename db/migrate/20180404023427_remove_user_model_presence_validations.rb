class RemoveUserModelPresenceValidations < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :lastname, :string, null: true
  end
end
