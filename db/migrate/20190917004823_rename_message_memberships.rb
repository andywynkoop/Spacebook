class RenameMessageMemberships < ActiveRecord::Migration[5.2]
  def change
    rename_table :message_memberships, :chat_memberships
  end
end
