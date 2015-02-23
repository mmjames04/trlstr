class User < ActiveRecord::Base

	has_many :comments
	has_many :likes

	def self.create_with_omniauth(auth)
		create! do |user|
			user.provider = auth["provider"]
			user.uid = auth["uid"]
			user.name = auth["info"]["name"]
			user.pic = auth["info"]["image"]
		end
	end
end
