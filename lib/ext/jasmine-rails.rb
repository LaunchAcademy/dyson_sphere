#monkey patch to get jasmine rails looking at the
#proper route (we nest jasmine-rails inside dyson_sphere)
require 'jasmine-rails'
require 'yaml'

module JasmineRails
  class << self
    def route_path
      '/dyson_sphere/specs'
    end
  end
end

