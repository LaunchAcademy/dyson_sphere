module DysonSphere
  class StyleguideController < ApplicationController
    def index
      render "styleguide/dyson_sphere/index"
    end

    def category
      render "styleguide/dyson_sphere/#{params[:category]}"
    end
  end
end
