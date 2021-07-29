// eee2311613bf4b669a244d9abb347b07
// http://newsapi.org/v2/top-headlines?apiKey=Your_api_key


$.ajax({
    url: 'https://newsapi.org/v2/everything?q=tesla&from=2021-06-29&sortBy=publishedAt&apiKey=eee2311613bf4b669a244d9abb347b07',
    success:function(data){
      console.log(data);
      var i;
          for (i = 0; i < data.articles.length; i++) {
            var x = data.articles[i]
            document.getElementById('objects').innerHTML +=
              '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"> ' +
              '<div class="card mt-3 ml-5" style="width: 20rem;">' +
              '<div class="card-body">' +
              '<class="card-text">' + '<h4>' + x.title + '</h4>' + '<br>' + '<p>' + x.description + '</p>' + '<br>' + 'Color: ' + x.author + '<br>' +
              '</div>' +
              '</div>' +
              '</div>';
          } //for loop
    },
    error:function(){
        alert('An error was encountered.');
    }
});
