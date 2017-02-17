class Meditation < ApplicationRecord
  has_many :events
  has_many :users, through: :events
  has_attached_file :icon, styles: { medium: "400x400>"}
  validates_attachment_file_name :icon, :matches => [/png\Z/, /jpe?g\Z/, /gif\Z/]
end
