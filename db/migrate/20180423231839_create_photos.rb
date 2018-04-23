class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.attachment :image
      t.integer :uploader_id
      t.string :caption
      t.timestamps
    end
  end
end
