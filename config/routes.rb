Rails.application.routes.draw do

  resources :trails

  root 'welcome#index'

end
