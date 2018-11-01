//function to check email, if email is 'admin@sendit.com' it redirects 
// to admin page else it redirects to user page.

function checkUsername(){

    let response = document.getElementById("email").value;
    if (response == "admin@sendit.com"){
        location = 'admin.html';
    }
    else{
        location = 'user.html'
    }
    return false;
}