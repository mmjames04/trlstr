class CreateTrails < ActiveRecord::Migration
  def change
    create_table :trails do |t|
      t.string :trail_id

      t.timestamps 
    end
  end
end
