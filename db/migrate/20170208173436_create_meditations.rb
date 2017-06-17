class CreateMeditations < ActiveRecord::Migration[5.0]
  def change
    create_table :meditations do |t|
      t.string :tradition
      t.text :instructions
      t.text :about
      t.string :name
      t.attachment :icon

      t.timestamps
    end
  end
end
