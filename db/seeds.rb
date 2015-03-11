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

trails = Trail.create(
	[
		{trail_id: "24114", name: "Lower Hunting Creek Camp Site", city: "Hunting Creek", state: "California", lat: "34.087846", lon: "-118.174587", type1: "camping", type2: "", length: "0", description: "Cutting or removing standing vegetation(live or dead), is strictly prohibited.  Use only wood that is both dead and down for firewood.", pic: "", rating: "0"},
		{trail_id: "14727", name: "Dockweiler State Beach", city: "Playa Del Rey", state: "California", lat: "33.94132", lon: "-118.440761", type1: "hiking", type2: "", length: "3", description: "Moderate loop that climbs to the ridge in Baldwin Hills.  From the summit you can see to the ocean on one side and downtown on the other.", pic: "http://images.tripleblaze.com/2011/03/042010_April-045-0.jpg", rating: "3"}
		])		
