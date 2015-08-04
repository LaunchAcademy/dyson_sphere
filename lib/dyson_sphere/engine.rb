require "sass-rails"
require "foundation-rails"
require "font-awesome-sass"
require "jquery-rails"
require "font-awesome-sass"
require "hologram"

module DysonSphere
  class Engine < ::Rails::Engine
    isolate_namespace DysonSphere

    initializer "dyson_sphere.assets.precompile" do |app|
      app.config.assets.precompile += %w( dyson_sphere/styleguide.css )
    end
  end
end
