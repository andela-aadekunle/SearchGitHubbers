$(document).ready(function() {


 $('form').submit(function (event) {
    
    event.preventDefault();
    // var $searchBox = $('#textBox');
    var userName = $('#textBox').val();

    var gitHubAPI = "http://api.github.com/search/users?";
    

    var gitHubOptions = {
      
      q: userName,
      
      
      sort:  "followers",  
 

       order: "asc",
      
      // format: "json"
    };

    function displayInfo (data) {

       var users = '<ul>';
      $.each(data.items, function (i,info) {
        users += '<li>' + info.login +  '</li>';
        users += '<img src="' +info.avatar_url + '"width=200 height=200>';
        users += '<li>' + info.score + '</li>';
        users += '<li>' + info.type + '</li>';
      }); 
        
        users += '</ul>';
      $('#results').html(users);

    }

     $.getJSON(gitHubAPI, gitHubOptions, displayInfo);
   });

 });

