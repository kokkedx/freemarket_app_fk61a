class PrefecturesController < ApplicationController
before_action :set_header

  def show
    @prefecture = Prefecture.includes(:items).find(params[:id])
  end

private
  def set_header
    @header_parents = Category.where(ancestry: nil)
  end

end
