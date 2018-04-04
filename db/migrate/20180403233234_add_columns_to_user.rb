class AddColumnsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :user_url, :string, null: false
  end
end
