class ProductSerializer < ActiveModel::Serializer
  attributes :id, :link, :image, :concern, :company, :name, :price
  has_one :SkinType
end
