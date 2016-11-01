class PlayersController < ApplicationController

  def index
    players = Player.all
    render :json => players
  end

  def show
    player = Player.find(params[:id])
    render :json => player.as_json
  end

  def create
    player = Player.create({name: params[:name], ranking: params[:ranking], image: params[:image]})
    render(json: player)
  end

end