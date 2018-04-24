require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Myface
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.paperclip_defaults = {
      :storage => :s3,
      :s3_region => ENV["AWS_REGION"],
      :s3_host_name => "s3.#{ENV["AWS_REGION"]}.amazonaws.com",
      :s3_credentials => {
        bucket: ENV['S3_BUCKET_NAME'],
        access_key_id: ENV['AWS_ACCESS_KEY_ID'],
        secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
        s3_region: ENV['AWS_REGION'],
        s3_host_name: "s3.#{ENV["AWS_REGION"]}.amazonaws.com"
      }
    }
  end
end
