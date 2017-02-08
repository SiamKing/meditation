class CreateMeditations < ActiveRecord::Migration[5.0]
  def change
    create_table :meditations do |t|
      t.string :tradition
      t.text :instructions

      t.timestamps
    end
  end
end
