class RefactorFriendships < ActiveRecord::Migration[5.2]
  def change
    drop_table :friendships
    create_table :friend_requests do |t|
      t.integer :requestor_id, null: false
      t.integer :requestee_id, null: false, index: true

      t.timestamps
    end

    add_index :friend_requests, [:requestor_id, :requestee_id], unique: true
    create_table :friendships do |t|
      t.integer :requestor_id, null: false, index: true
      t.integer :requestee_id, null: false, index: true
    end
  end
end
