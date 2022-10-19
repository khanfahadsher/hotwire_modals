Rails.application.routes.draw do
  resources :personals
  resources :employments
  root "personals#index"
  get 'personals/new', to: 'personals#new'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
