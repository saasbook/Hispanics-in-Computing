Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'hispanicsincomputing#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'
  get 'members', to: 'hispanicsincomputing#members'

  get  'tapia2018'   => 'hispanicsincomputing#tapia_2018',  :as => 'conference_2018'
  get  'tapia2017'   => 'hispanicsincomputing#tapia_2017',  :as => 'conference_2017'
  get  'tapia2016'   => 'hispanicsincomputing#tapia_2016',  :as => 'conference_2016'
  get  'tapia2013'   => 'hispanicsincomputing#tapia_2013',  :as => 'conference_2013'


  get  'add_info'   => 'posts#new'
  post  'new_info'  => 'posts#save'

  get '/auth/:provider/callback', to: 'hispanicsincomputing#create'
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
