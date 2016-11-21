meteorDown.init(function (Meteor) {
	var Visitors = Meteor.collections[0];
	

	var visitorId = Visitors.find().fetch()[0]._id;

	Meteor.call('visitor.entry', visitorId, 
								 Math.random(), 
								 Math.random(),
								 function (error, result) {
		Meteor.kill();
	});
});

meteorDown.run({
	concurrency: 50,
	url: "http://localhost:3000"
})