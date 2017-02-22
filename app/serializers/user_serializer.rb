class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :events
  has_many :meditations, through: :events
  class MeditationSerializer < ActiveModel::Serializer
    attributes :id, :name
  end
end
