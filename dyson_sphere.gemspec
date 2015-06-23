$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "dyson_sphere/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "dyson_sphere"
  s.version     = DysonSphere::VERSION
  s.authors     = ["cmkoller"]
  s.email       = ["cmkoller01@gmail.com"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of DysonSphere."
  s.description = "TODO: Description of DysonSphere."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.1"
  s.add_dependency "sass-rails"
  s.add_dependency "foundation-rails"
  s.add_dependency "font-awesome-sass"
  s.add_dependency "hologram"

  s.add_development_dependency "sqlite3"
end
