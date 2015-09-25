DysonSphere::Engine.routes.draw do
  get "styleguide" => "styleguide#index"
  get "styleguide/:category" => "styleguide#category"

  mount JasmineRails::Engine => "/specs" if defined?(Jasmine)
end
