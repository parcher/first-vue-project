//app.js

new Vue({
	// We want to target the div with an id of 'events'
	el: '#events',
	
	// Here we can register any values or collections that hold data for the application
	data: {
		event: {name:'', description:'', date:''},
		events: [
			{
			id: 1,
			name: 'PFVT',
			description: 'Pauls First Vue Tutorial',
			date: '06-30-2017'
		    },
			{
			id: 2,
			name: 'The Martians',
			description: 'Martains rescued Paul from his tutorial',
			date: '07-01-2017'
			},
			{
			id: 3,
			name: 'Music Festival',
			description: 'Big celebration on Mars of Pauls rescue',
			date: '11-01-2017'
			}
		]
	},
	
	ready: function() {},
	
	methods: {
		//Adds an event to the exiting events array
		addEvent: function() {
			if(this.event.name) {
				this.events.push(this.event);
				this.event = { name: '', description: '', date: '' };
			}
		},
		
		deleteEvent: function(index) {
			if(confirm("Are you sure you want to delete this event?")) {
				this.events.splice(index,1);
			}
		}
	}
});



	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Anything within the ready function will run when teh application loads
	//ready: function() {
	//	// When the application loads, we want to call the method that initializes some data
	//	this.fetchEvents();
	//},
	
	//Methods we want to use in our application are registered here
	//methods: {
		// We dedicate a method to retieving and settiing some data
		//fetchEvents: function() {
		//	var events = [
		//		{
		//			id: 1,
		//			name: 'PFVT',
		//			description: 'Pauls First Vue Tutorial',
		//			date: '06-30-2017'
		//		},
		//		{
		//			id: 2,
		//			name: 'The Martians',
		//			description: 'Martains rescued Paul from his tutorial',
		//			date: '07-01-2017'
		//		},
		//		{
		//			id: 3,
		//			name: 'Music Festival',
		//			description: 'Big celebration on Mars of Pauls rescue',
		//			date: '11-01-2017'
		//		}
		//	];
		//
			//$set is a convenience method provided by Vue that is similar to pushing data onto an array
		//	this.$set('events', events);
		//},
		
		// Adds an event to the exiting events array
		//addEvent: function() {
		//	if(this.event.name) {
		//		this.events.push(this.event);
		//		this.event = {name: '', description: '', date: ''};
		//	}
		//}	
	//}
//});


