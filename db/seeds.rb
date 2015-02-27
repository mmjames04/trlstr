# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


likes = Like.create(
	[
		{user_id: "1", trail_id: "1220"},
		{user_id: "2", trail_id: "1220"}
		])

comments = Comment.create(
	[
		{user_id: "1", trail_id: "1220", body: "this trail was awesome"},
		{user_id: "2", trail_id: "1220", body: "I've seen better trails."}
		])

users = User.create(
	[
		{name: "Austin", uid: "123", provider: "Twitter", pic: "http://static.comicvine.com/uploads/original/11112/111127507/3936635-6756149474-114.j.jpg"}
		])