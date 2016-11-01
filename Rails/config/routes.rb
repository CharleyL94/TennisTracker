Rails.application.routes.draw do

  scope path: "api" do
    resources :players
    resources :tournaments
  end

end
