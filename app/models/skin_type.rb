class SkinType < ApplicationRecord
    has_many :products, dependent: :destroy
end
