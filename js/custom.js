// eee2311613bf4b669a244d9abb347b07
// http://newsapi.org/v2/top-headlines?apiKey=Your_api_key


$.ajax({
  url: 'https://newsapi.org/v2/everything?q=tesla&from=2021-07-02&sortBy=publishedAt&apiKey=eee2311613bf4b669a244d9abb347b07',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log(data.articles);

    // document.getElementById('result').innerHTML = '';

    var i;
    for (i = 0; i < data.articles.length; i++) {
      var x = data.articles[i]
      document.getElementById('objects').innerHTML +=
        '<div class="articles col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"> ' +
        '<div class="card mt-3 ml-5" style="width: 45rem;">' +
        '<div class="card-body">' + '<img src="' + x.urlToImage + '">' +
        '<class="card-text">' + '<h4>' + x.title + '</h4>' + '<br>' + '<p>' + x.description + '</p>' + '<br>' + '<p> Author: ' + x.author + '</p><br>' +
        '</div>' +
        '</div>' +
        '</div>';
    } //for loop
  },
  error: function() {
    alert('An error was encountered.');
  }
});

$('.about-popup').click(function(e) {
  popup();
  $('.about-popup').toggleClass('fullscreen');
});

function popup() {
  // popup down
  if ($('.about-popup').hasClass('popup-hover')) {
    $('.about-popup').removeClass('popup-hover');
    $('.popup-before').addClass('hide');
    $('.popup-before').fadeOut(100,
      function() {
        $('.popup-after').fadeIn(1500);
      });
  } else { // popup up
    $('.about-popup').addClass('popup-hover');
    $('.popup-after').fadeOut(100,
      function() {
        $('.popup-before').fadeIn(1200);
      });
  }
};
