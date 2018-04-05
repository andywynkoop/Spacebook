class AddIndexToUserUrl < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :user_url, unique: true
  end
end
