
// var urlUsers = 'https://randomuser.me/api/?results=10';
var urlUsers = 'users';
new Vue({
	el: '#main',
	created: function(){
		this.getUsers();
	},
	data: {
		list: []
	},
	methods: {
		getUsers: function(){
			axios.get(urlUsers).then(response => {
				this.list = response.data
			});
		}
	}

});
