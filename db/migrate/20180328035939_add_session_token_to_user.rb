class AddSessionTokenToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :session_token, :string
  end
end
