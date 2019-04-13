class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.boolean :status, default: true
      t.boolean :shouldTest, default: false
      t.string :testDate

      t.timestamps
    end
  end
end
