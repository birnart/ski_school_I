Rails.application.routes.draw do
  root to: 'pages#home'
  get 'free_tab', to: 'pages#free_tab'
  get 'kurse', to: 'pages#kurse'
  get 'kontakt', to: 'pages#kontakt'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
