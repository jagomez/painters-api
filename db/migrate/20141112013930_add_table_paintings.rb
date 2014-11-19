class AddTablePaintings < ActiveRecord::Migration
  def change
    create_table :paintings do |t|
      t.string :name
      t.string :date
      t.string :painter_id, :integer

      t.timestamps
  end
end
end