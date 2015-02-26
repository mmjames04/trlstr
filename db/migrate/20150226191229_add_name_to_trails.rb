class AddNameToTrails < ActiveRecord::Migration
  def change
    add_column :trails, :name, :string
    add_column :trails, :city, :string
    add_column :trails, :state, :string
    add_column :trails, :lat, :string
    add_column :trails, :lon, :string
    add_column :trails, :type1, :string
    add_column :trails, :type2, :string
    add_column :trails, :length, :string
    add_column :trails, :description, :text
    add_column :trails, :pic, :string
    add_column :trails, :rating, :string
  end
end
