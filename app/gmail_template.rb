require 'sinatra'
require_relative "./lib/template_options.rb"

get '/templates' do
  content_type :json
  TEMPLATE_OPTIONS.to_json
end