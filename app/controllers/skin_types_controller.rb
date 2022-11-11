class SkinTypesController < ApplicationController

    def index
        skintypes = SkinType.all
        render json: skintypes, status: :ok
    end
end
