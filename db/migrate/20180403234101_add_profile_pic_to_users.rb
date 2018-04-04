class AddProfilePicToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_img_url, :string
  end
end
