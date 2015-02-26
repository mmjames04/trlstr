class User < ActiveRecord::Base

	has_many :comments
	has_many :likes

	def self.create_with_omniauth(auth)
		user = User.new
		user.provider = auth["provider"]
		user.uid = auth["uid"]
		user.name = auth["info"]["name"]
		user.pic = auth["info"]["image"]
		user.save
	end
end
