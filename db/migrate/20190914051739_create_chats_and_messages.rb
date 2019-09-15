class CreateChatsAndMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.integer :creator_id, null: false, index: true
      t.string :name

      t.timestamps
    end

    create_table :message_memberships do |t|
      t.integer :chat_id, null: false, index: true
      t.integer :user_id, null: false, index: true
    end

    create_table :messages do |t|
      t.integer :chat_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.text :body, null: false
      
      t.timestamps
    end
  end
end
