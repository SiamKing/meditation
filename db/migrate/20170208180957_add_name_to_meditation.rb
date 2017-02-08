class AddNameToMeditation < ActiveRecord::Migration[5.0]
  def change
    add_column :meditations, :name, :string
  end
end
