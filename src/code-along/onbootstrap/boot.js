const apiUrl = 'https://picsum.photos/v2/list';

window.onload = function() {
  $.ajax({
    url: apiUrl,
    contentType: 'application/json',
    dataType: 'json',
    success: function(result) {
      console.log('result', result)
      let resultAuthor = result[10].result
      Authorconsole.log('resultAuthor', resultAuthor)
      result.forEach(item => {
        $('.card-img-top').attr('src', item.url)
      })  
    })
  }