require 'pry'

class TrailsController < ApplicationController

	def create
		@trail_id = params[:trail][:trail_id]
		if Trail.exists?(:trail_id => @trail_id)
			@trail = params[:trail]
				render json: {:trail => @trail} 

		else
			@trail = Trail.new(trails_params)
			if @trail.save
				render json: {:trail => @trail} 
			end
		end
	end

	def new

	end

	def index
		@trails = Trail.all
	end

	def show
		@trails = Trail.all
		@trail = Trail.find_by(:trail_id => params[:id])
		@users = User.all
		@comments = Comment.where(:trail_id => params[:id])
		@likes = Like.find_by(:trail_id =>params[:trail_id])
	end

	def upvote
		@trail = Trail.find(params[:id])
		@trail.upvote_by current_user
		respond_to do |format|
			format.html {redirect_to :back }
			format.json { render json: { count: @trail.count}}
		end
	end

	def downvote
		@trail = Trail.find(params[:id])
		@trail.downvote_by current_user
		respond_to do |format|
			format.html {redirect_to :back }
			format.json { render json: {count: @trail.count}}
		end
	end

	private

	def trails_params
		params.require(:trail).permit(:trail_id, :name, :city, :state, :lat, :lon, :type1, :type2, :length, :description, :pic, :rating)
	end
end
