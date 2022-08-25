
 function phonenumber()
{
  var phoneno = /^\d{10}$/;
  if((document.getElementById("phoneno").value.match(phoneno)))
        {
      return true;
        }
      else
        {
        alert("wrong phone number!!");
        return false;
        }
}