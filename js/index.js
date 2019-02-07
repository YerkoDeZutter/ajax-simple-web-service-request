window.onload = function(){

  $.get("https://thatsthespir.it/api", function(data){
    console.log(data);

    $("#qoute").text('"' + data.quote + '"');

    $("#persImg").attr("src", data.photo);

    $("#author").text(data.author);

    $("#total_quotes").text(data.total_quotes);

  })

}
