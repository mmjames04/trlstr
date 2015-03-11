
class WelcomeController < ApplicationController
  
	def index
		@trails = Trail.all
	end


end
