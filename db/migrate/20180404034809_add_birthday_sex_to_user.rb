class AddBirthdaySexToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :birthday, :datetime
    add_column :users, :sex, :string
  end
end
