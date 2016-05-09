$(document).ready(function(){

    getTheQuote();

    $("#newQuote").on("click",function(){
      getTheQuote();
    });
});


function getTheQuote() {
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
}

function gotQuote(data){

    var quoteAuthor;

    console.log(data);
    $("#quote").html(data.quoteText);

    if(data.quoteAuthor!=="")
    quoteAuthor = data.quoteAuthor;

    else
    quoteAuthor = "Unknown Source";

    $("#author").html(quoteAuthor);

    $("#tweet-link").attr("href","https://twitter.com/intent/tweet?text=" + data.quoteText + "by%20\"" + quoteAuthor + "\"&related=freecode%20camp&hashtags=quotes");
}
