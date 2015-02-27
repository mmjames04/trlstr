require 'pry'

class TrailsController < ApplicationController

	def create
		@trail = Trail.new(trails_params)
		
		@trail.save
		render json: {:trail => @trail}
	end

	def new
		@trail_id = params[:trail_id]

		if Trail.exists?(:trail_id => @trail_id)
			@trail = Trail.find_by(:trail_id => params[:trail_id])
			redirect_to "/trails/#{@trail.id}"
		else
			@trail = Trail.new(trails_params)

			if @trail.save
				redirect_to "/trails/#{@trail.id}"
			else
				redirect_to "/"
			end
		end

	end

	def index
		@trails = Trail.all
	end

	def show
		@trails = Trail.all
		@trail = Trail.find(params[:id])
		@users = User.all
		@comments = Comment.find_by(:trail_id =>params[:trail_id])
		@likes = Like.find_by(:trail_id =>params[:trail_id])
	end

	private

	def trails_params
		params.require(:trail).permit(:trail_id, :name, :city, :state, :lat, :lon, :type1, :type2, :length, :description, :pic, :rating)
	end

end
