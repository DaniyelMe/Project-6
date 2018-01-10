$(".btn-primary").click(function(){
  var payout = { email : document.getElementById("InputEmail").value, password : document.getElementById("InputPassword").value}
  $.ajax({
    type: 'post',
    url: '/login',
    contentType: 'application/json',
    data: JSON.stringify(payout),
    xhrFields: {
        withCredentials: false
    },
    success: function (data) {
        console.log('Success');
        console.log(data);
    },
    error: function () {

        console.log('We are sorry but our servers are having an issue right now');
      }
  });
});
