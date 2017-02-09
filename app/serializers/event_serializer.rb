class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :meditation_id, :minutes, :date
  has_one :meditation, only: :name
  has_one :user
end
