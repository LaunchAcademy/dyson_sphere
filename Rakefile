begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

require 'rdoc/task'

begin
  require 'jasmine'
    load 'jasmine/tasks/jasmine.rake'
  rescue LoadError
    task :jasmine do
      abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
    end
end

RDoc::Task.new(:rdoc) do |rdoc|
  rdoc.rdoc_dir = 'rdoc'
  rdoc.title    = 'DysonSphere'
  rdoc.options << '--line-numbers'
  rdoc.rdoc_files.include('README.rdoc')
  rdoc.rdoc_files.include('lib/**/*.rb')
end

APP_RAKEFILE = File.expand_path("../test/dummy/Rakefile", __FILE__)

load 'rails/tasks/engine.rake'
load 'rails/tasks/statistics.rake'
Bundler::GemHelper.install_tasks

require 'rake/testtask'

Rake::TestTask.new(:test) do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/**/*_test.rb'
  t.verbose = false
end

task default: ['test', 'jasmine:ci']
