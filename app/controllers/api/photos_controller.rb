class Api::PhotosController < ApplicationController
  def create
    photo = params[:photo]
    photograph = Photo.new(caption: photo[:caption])
    photograph.image = photo[:image]
    photograph.save
    p photograph.image.url
  end

  def show
    id = params[:id]
    photo = Photo.find(id)
    url = photo.image.url
    new_url = url.split("s3.").join("s3-us-west-1.")
    p new_url
    render json: [new_url]
  end
end