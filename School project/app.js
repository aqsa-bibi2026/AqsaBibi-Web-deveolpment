// Website Load Message

console.log("UniManage System Loaded");



// Login Function

function loginUser(event){

event.preventDefault();


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(username==="admin" && password==="12345"){


alert("Login Successful");


window.location.href="admin-dashboard.html";


}

else{


alert("Invalid Username or Password");


}


}





// Delete Student


let deleteButtons =
document.querySelectorAll(".delete-btn");



deleteButtons.forEach(function(button){


button.addEventListener("click",function(){


let confirmDelete =
confirm("Delete this student?");


if(confirmDelete){


button.closest("tr").remove();


}



});


});






// Edit Student


let editButtons =
document.querySelectorAll(".edit-btn");



editButtons.forEach(function(button){


button.addEventListener("click",function(){


alert("Edit Student Feature Coming Soon");


});


});







// Open Add Student Form


function openForm(){


let form =
document.getElementById("studentForm");


if(form){

form.style.display="flex";

}


}





// Close Form


function closeForm(){


let form =
document.getElementById("studentForm");


if(form){

form.style.display="none";

}


}







// Add Student


function addStudent(){



let name =
document.getElementById("name").value;


let id =
document.getElementById("id").value;


let dept =
document.getElementById("dept").value;


let email =
document.getElementById("email").value;




if(name==="" || id==="" || dept==="" || email===""){


alert("Please fill all fields");


return;


}



alert("Student Added Successfully");



closeForm();



}