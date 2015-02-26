class Trail < ActiveRecord::Base

	has_many :comments
	has_many :likes

	# validates :trail_id, presence: true
	# validates :name, presence: true
	# validates :city, presence: true
	# validates :state, presence: true
	# validates :lat, presence: true
	# validates :lon, presence: true
	# validates :length, presence: true
	# validates :description, presence: true
	# validates :rating, presence: true

end
