// window.addEventListener("load",main);

function _(id) {
    return document.getElementById(id);
}
_("Registration-form").addEventListener("submit",validate);

function validate(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name= formData.get("name");
    var email = formData.get("email");
    var phone = formData.get("phone");
    var address =formData.get("address");
    var city =formData.get("city");
    var state =formData.get("state");
    var postalCode = formData.get("postalCode");
   submit({
    name,
    email,
    phone,
    address,
    city,
    state,
    postalCode,
    }); 
}
function submit(data){
fetch("http://192.168.1.39:5000/organization/register", {method:"POST",
    headers:{
        "content-type":"application/json"
            },
        body:JSON.stringify(data),
        })
        .then((response)=>response.json())
        .then((result) =>{
            for(var j = 0; j < document.getElementsByClassName("error-message").length; j++){
            document.getElementsByClassName("error-message")[j].innerHTML = "";
            }
            if(!result.status){
            for(var i = 0; i < result.data.length; i++){
            _(result.data[i].path+"-error").innerHTML = result.data[i].message;
            }
            }
    //window.location.href = "./user.html?id=" + result.id;

 else { 
    console.log("Success");
}

        })

.catch((err)=>{
    console.log(err);
});
}
















    // function nameValidation(value,id){
    //     return !isEmptyOrShort(value, id, 3 , "Name ");
    // }    


    // function isEmptyOrShort(value, id,minlength, key)
    // {
    //     if(!value) {
    //         setError(id, "Please enter your " + key);
    //         return true;
    //     }
    //     if (value.length<minlength) {
    //         setError(id, key + "must be at least " + minlength + " characters");
    //         return true;
    //     }
    //     setError(id, "");
    //     return false;
    // }

    
   

    // function emailValidation(value,id){
    //     if(!value) {
    //         setError(id, "Please enter your email");
    //         return false;
    //     } 
    //      if(!value.includes("@")) {
    //         setError(id, "Please enter a valid email");
    //         return false;
    //     }
    //     setError(id, "");
    //     return true;
    // }

    // function numberValidation(value,id){
    //     return !isEmptyOrShort(value, id, 10 , "Phone number ");
    //  } 


    // function addressValidation(value,id){
    //     return !isEmptyOrShort(value, id, 8 , "address ");
    // }

    // function cityValidation(value,id){
    //     return !isEmptyOrShort(value, id, 5 , "city ");
    // }

    // function stateValidation(value,id){
    //     return !isEmptyOrShort(value, id, 4 , "state ");
    // }
       
    // function postalCodeValidation(value,id){
    //     return !isEmptyOrShort(value, id, 6 , "postalCode ");
    // }
  

    // function setError(id, message) {
    //     _(id).innerHTML = message;
    // }