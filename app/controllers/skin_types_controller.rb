class SkinTypesController < ApplicationController

    def index
        skintypes = SkinType.all
        render json: skintypes, include: ['products'], status: :ok
    end
end
