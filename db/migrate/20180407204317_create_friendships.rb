class CreateFriendships < ActiveRecord::Migration[5.1]
  def change
    create_table :friendships do |t|
      t.integer :requesting_user_id, null: false
      t.integer :requested_user_id, null: false
      t.boolean :approved, null: false, default: false

      t.timestamps
    end
  end
end
