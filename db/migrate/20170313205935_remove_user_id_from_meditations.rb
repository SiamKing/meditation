class RemoveUserIdFromMeditations < ActiveRecord::Migration[5.0]
  def change
    remove_reference :meditations, :user
  end
end
