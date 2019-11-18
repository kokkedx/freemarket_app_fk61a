class Api::SellController < ApplicationController
  def new_delivery
    @ship_deliveries= ShipDelivery.where(params[:charge])
  end
endj