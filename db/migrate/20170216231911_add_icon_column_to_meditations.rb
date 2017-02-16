class AddIconColumnToMeditations < ActiveRecord::Migration[5.0]
  def up
    add_attachment :meditations, :icon
  end

  def down
    remove_attachment :meditations, :icon
  end
end
