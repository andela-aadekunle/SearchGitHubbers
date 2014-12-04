var SearchGitHubUsers = {
  
  initialise: function () {
                $('form').submit(function (event) {
                event.preventDefault();
                var userName = $('#textBox').val();
                // var $searchBox = $('#textBox');
                var gitHubAPI = "http://api.github.com/search/users?";
                
                var gitHubOptions = {
                q: userName,
                sort:  "followers",  
                order: "asc"
                };

                var displayInfo = function (data) {
                                    var users = '<ul>';
                                    $.each(data.items, function (i,info) {
                                    users += '<li>';
                                    users += '<a href="' + info.repos_url + '">';
                                    users += '<img src="' + info.avatar_url + '"width=200 height=200></a><br/>';
                                    users += '<div> Login: <span>' + info.login +  '</span><br/>';
                                    users += 'Score: <span>' + info.score + '</span><br/>'; 
                                    users += 'Id: <span>' + info.id + '</span><br/>';                                
                                    users += 'Type: <span>' + info.type + '</span><br/>';
                                    users += '<a href="' + info.html_url + '">Check Profile</a></div></li>'
                                  }); 
                                    users += '</ul>';
                                    $('#results').html(users);
                                 };
      
              $.getJSON(gitHubAPI, gitHubOptions, displayInfo);
        });
     }
  };

$(document).ready(SearchGitHubUsers.initialise);