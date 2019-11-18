class TransactionsController < ApplicationController

  def buying
    @item = Item.find(params[:item_id])
    @transaction = Transaction.new(item_id: @item.id, buyer_id: current_user.id, seller_id: @item.user.id)
    @point = 150
  end


  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      puts @transaction
    else
      render 'buying' and return
    end
  end




private

  def transaction_params
    params.require(:transaction).permit(:item_id, :buyer_id, :seller_id)
  end

end
