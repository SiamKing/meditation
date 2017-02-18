class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :meditation_id, :minutes, :date
  has_one :meditation, only: :name
  has_one :user
  class MeditationSerializer < ActiveModel::Serializer
    attributes :id, :name
  end
end
