class TrailsController < ApplicationController
	
	def create
		params["data"].each do |data|
			data["trail_id"] = data["unique_id"]
			Trail.create(data)
		end
	end

end
