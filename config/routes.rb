DysonSphere::Engine.routes.draw do
  get "styleguide" => "styleguide#index"
  get "styleguide/:category" => "styleguide#category"
end
