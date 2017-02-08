class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :name, :tradition, :instructions, :user_id

end
