class AddCoverPicToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :cover_photo_url, :string
    
  end
end
