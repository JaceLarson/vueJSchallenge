import axios from 'axios'





const vm = new Vue({
  el: '#user',
  data: function () {
    return{
    
    results: []
    }
  },
  mounted() {
    var self = this;
    axios.get("https://jsonplaceholder.typicode.com/Users")
    .then(response => {self.results = response.data})
    .then(response => {console.log})
    
  },
  methods: {
    showAlbums: function () {

    }


  }
});

const vm2 = new Vue({
  el: '#albums',

  
 
  data: function () {
    
    return{
    albumResults: []
    }

    
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/Albums")
    .then(response => {this.albumResults = response.data})
    .then(response => {console.log})
    
  },
  methods: {
    showAlbums: function (id) {
      id = 4;
      userId = id;
      axios.get("https://jsonplaceholder.typicode.com/Albums")
      .then(response => {this.albumResults = response.data})

      for(id in this.albumResults) {
        if(this.albumResults.userId === id) {
            console.log(this.albumResults.userId);
        }
    }
      
    }

  },
  computed:{
  	filteredAlbums: function(){

    }
  }


});






  




  