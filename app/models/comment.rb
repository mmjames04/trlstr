class Comment < ActiveRecord::Base

	belongs_to :user
	belongs_to :trail

	default_scope -> {order('created_at DESC')}
end
