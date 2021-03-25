
const usernamefield = document.getElementById('username-field');
usernamefield.addEventListener("keyup",(e)=>{
  const usernameval = e.target.value;
  if(usernameval.length>0){
  fetch("/authentication/validate-username",{
    body: JSON.stringify({username:usernameval}),
    method:"POST",
  }).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    });
}});
