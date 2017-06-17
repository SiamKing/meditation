class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.references :user, foreign_key: true
      t.references :meditation, foreign_key: true
      t.integer :minutes
      t.date :datetime

      t.timestamps
    end
  end
end
