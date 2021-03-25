
const usernamefield = document.getElementById('username-field');
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');
usernamefield.addEventListener("keyup",(e)=>{
  const usernameval = e.target.value;
  if(usernameval.length>0){
  fetch("/authentication/register",{
    body: JSON.stringify({username:usernameval}),
    method:"POST",
  }).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    });
}});
