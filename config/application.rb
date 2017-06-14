require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)


module Meditations
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.assets.precompile.shift

    # Add additional asset pathes
    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
    config.assets.paths << Rails.root.join('vendor', 'assets', 'components', 'bootstrap', 'dist', 'fonts')
    config.assets.paths << Rails.root.join('vendor', 'assets', 'fonts')

    # Precompile additional asset types
    config.assets.precompile.push(Proc.new do |path|
      File.extname(path).in? [
        '.html', '.erb', '.haml',                 # Templates
        '.png',  '.gif', '.jpg', '.jpeg', '.svg', # Images
        '.eot',  '.otf', '.svc', '.woff', '.ttf', # Fonts
      ]
    end)
    config.to_prepare do
      DeviseController.respond_to :html, :json
    end
    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
  end
end

# via https://gist.github.com/afeld/5704079
# Rails.application.configure do
#   config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
#   # We don't want the default of everything that isn't js or css, because it pulls too many things in
#   config.assets.precompile.shift
#
#   # Explicitly register the extensions we are interested in compiling
#   config.assets.precompile.push(Proc.new do |path|
#     File.extname(path).in? [
#       '.html', '.erb', '.haml',                 # Templates
#       '.png',  '.gif', '.jpg', '.jpeg', '.svg', # Images
#       '.eot',  '.otf', '.svc', '.woff', '.ttf', # Fonts
#     ]
#   end)
# end
