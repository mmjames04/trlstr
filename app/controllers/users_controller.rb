class UsersController < ApplicationController

	def create
	end


	def index
		@users = User.all
		@user ||= User.find(session[:user_id]) if session[:user_id]
	end


end
