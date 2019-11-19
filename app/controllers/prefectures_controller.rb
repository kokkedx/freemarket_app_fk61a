class PrefecturesController < ApplicationController
  def show
    @prefecture = Prefecture.includes(:items).find(params[:id])
  end

end
