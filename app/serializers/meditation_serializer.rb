class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :tradition, :instructions, :icon

end
