require "sass-rails"
require "foundation-rails"
require "font-awesome-sass"
require "jquery-rails"
require "font-awesome-sass"
require "hologram"
require "underscore-rails"

module DysonSphere
  class Engine < ::Rails::Engine
    isolate_namespace DysonSphere

    initializer "dyson_sphere.assets.precompile" do |app|
      app.config.assets.precompile += %w( dyson_sphere/styleguide.css )
    end

    initializer "jasmine hack" do
      if defined?(Jasmine)
        require DysonSphere::Engine.root.join('lib/ext/jasmine-rails')
      end
    end
  end
end
