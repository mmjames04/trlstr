Rails.application.routes.draw do

  root 'welcome#index'

  get "/auth/twitter/callback" => "sessions#create"

  get "/signout" => "sessions#destroy", :as => :signout

  post "/trails" => "welcome#index"

  resources :trails


  resources :comments
  resources :likes

end
