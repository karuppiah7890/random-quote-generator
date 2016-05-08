$(document).ready(function(){

  $.ajax({
      url : "http://api.forismatic.com/api/1.0/",
      type : "POST",
      crossDomain : true,
      data : {
        method : "getQuote",
        format : "jsonp",
        lang : "en"
      },
      dataType : "jsonp",
      jsonp : "jsonp",
      jsonpCallback : "gotQuote"
  });

});

function gotQuote(data){

    console.log(data);
    $("#quote").html(data.quoteText);
    $("#author").html(data.quoteAuthor);
}
