$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "dyson_sphere/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "dyson_sphere"
  s.version     = DysonSphere::VERSION
  s.authors     = ["Christina Koller"]
  s.email       = ["christina.koller@launchacademy.com"]
  s.homepage    = "http://www.launchacademy.com/"
  s.summary     = "Styling and styleguide for Launch Academy apps"
  s.description = "This engine contains all the base styling for internal Launch Academy apps, along with a styleguide to guide development further design."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails"
  s.add_dependency "sass-rails"
  s.add_dependency "rouge", "1.9.0"
  s.add_dependency "foundation-rails", "5.5.3.2"
  s.add_dependency "font-awesome-sass"
  s.add_dependency "haml"
  s.add_dependency "hologram"
  s.add_dependency "jquery-rails"
  s.add_dependency "underscore-rails"
  s.add_dependency "slick_rails", "1.3.15"


  s.add_development_dependency "sqlite3"
end
