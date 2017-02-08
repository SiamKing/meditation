class AddAboutToMeditation < ActiveRecord::Migration[5.0]
  def change
    add_column :meditations, :about, :text
  end
end
