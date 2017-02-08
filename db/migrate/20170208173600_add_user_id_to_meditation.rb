class AddUserIdToMeditation < ActiveRecord::Migration[5.0]
  def change
    add_reference :meditations, :user, foreign_key: true
  end
end
