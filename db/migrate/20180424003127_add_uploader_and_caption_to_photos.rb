class AddUploaderAndCaptionToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :uploader_id, :integer
    add_column :photos, :caption, :string
  end
end
