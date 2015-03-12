class CommentsController < ApplicationController

	def create
		@trail = Trail.find(params[:trail_id])
		@user = User.find(current_user)
		@comment = @trail.comments.create(:body => params[:comment], :trail_id => params[:id])
		if @comment.save
			redirect_to @trail.id
		else
			flash[:error] = "Something went wrong"
			redirect_to @trail
		end
	end

	def destroy
		@trail = Trail.find(params[:trail_id])
		@user = User.find(current_user)
		@comment = @trail.comments.find(params[:id])
		@comment.destroy
		redirect_to @trail
	end
end