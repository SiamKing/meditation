class User < ApplicationRecord
  has_many :events
  has_many :meditations, through: :events

end
