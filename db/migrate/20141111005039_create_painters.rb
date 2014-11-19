class CreatePainters < ActiveRecord::Migration
  def change
    create_table :painters do |t|
      t.string :first_name
      t.string :last_name
      t.string :country
      t.string :yearsactive

      t.timestamps
    end
  end
end
