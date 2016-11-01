class TournamentsController < ApplicationController

  def index
    tournaments = Tournament.all
    render :json => tournaments
  end

  def show
    tournament = Tournament.find(params[:id])
    render :json => tournament.as_json
  end

  def create
    tournament = Tournament.create({name: params[:name], location: params[:location], lat: params[:lat], lng: params[:lng]})
    render(json: player)
  end
end