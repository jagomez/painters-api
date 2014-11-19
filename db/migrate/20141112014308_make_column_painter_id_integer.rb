class MakeColumnPainterIdInteger < ActiveRecord::Migration
  def change
  	change_column :paintings, :painter_id, :integer
  end
end
