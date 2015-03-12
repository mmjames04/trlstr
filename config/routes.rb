Rails.application.routes.draw do

  root 'welcome#index'

  get "/auth/twitter/callback" => "sessions#create"

  get "/signout" => "sessions#destroy", :as => :signout

  post "trails/:id" => "trails#show"

  resources :trails do
  	member do
  		put "like", to: "trails#upvote"
  		put "dislike", to: "trails#downvote"
  	end
  end


  resources :comments
  resources :likes

end
