class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_time_meditating
  has_many :events
  has_many :meditations, through: :events
end
