class SkinTypeSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :image, :products
end
