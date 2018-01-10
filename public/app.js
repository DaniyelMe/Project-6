$(".btn-primary").click(function(){
  var payout = { email : document.getElementById("InputEmail").value, password : document.getElementById("InputPassword").value}
  $.ajax({
    type: 'post',
     headers: { 'Content-Type': 'application/json' },
    datatype: 'json',
    url: '/login',
    data: JSON.stringify(payout)
  })
});
