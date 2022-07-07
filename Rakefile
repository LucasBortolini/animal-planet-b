def execute(command)
  system "#{command}"
end

desc 'Jekyll serve'
task :serve do
  execute("bundle exec jekyll serve --trace --livereload --config _config.yml,_config_development.yml")
end

desc 'Jekyll build for production'
task :build do 
  execute("JEKYLL_ENV=production bundle exec jekyll build --trace --config _config.yml")
end
