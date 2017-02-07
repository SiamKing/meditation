class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_time_meditating
end
