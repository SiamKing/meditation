class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :tradition, :instructions, :user_id, :icon

end
