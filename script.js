var admins = [
{
    "email":"admin@gmail.com",
    "password":"123",
    "name":"Admin"

} ,

{
    "email":"ravi@gmail.com",
    "password":"123",
    "name":"Ravi"
}
];

var data = [
    {
        "name":"Ravi",
        "course":"React",
        "email":"ravi@gmail.com"

    } ,

    {
        "name":"harsh",
        "course":"React",
        "email":"harsh@gmail.com"

    } , 

    
    {
        "name":"shiv",
        "course":"React",
        "email":"shiv@gmail.com"

    } 


];

var tbody = document.getElementById('bodydata');

// console.log(admins[0].name)


function registration()
{
    event.preventDefault();
    var name = document.getElementById('name').value  
    var email = document.getElementById('email').value  
    var password = document.getElementById('password').value 
    var temp = {
        "email":email,
        "password":password,
        "name":name
    
    } 

    admins.push(temp) 
    swal("Good job!", "Your Registration Done ", "success");
    // console.log(admins)
    clr();
}
function login()
{
    event.preventDefault(); 
    var uemail = document.getElementById('uemail').value  
    var upass = document.getElementById('upassword').value  
     admins = admins.filter(item=>item.email == uemail && item.password == upass)
   if(admins.length >=1)
   {
    localStorage.setItem('email',uemail);
    

    swal("Good job!", "Login True..!", "success");
    window.location.href = 'dashboard.html'
   } 
   else 
   {
    alert("Login False")
   }
}
function clr()
{
     document.getElementById('name').value  = '' 
    document.getElementById('email').value   = ''
     document.getElementById('password').value = ''
} 

function logout()
{
    localStorage.removeItem('email'); 
    window.location.href = 'index.html'


} 

function insertStudent()
{
    var sname = document.getElementById('stdname').value;  
    var scourse = document.getElementById('stdcourse').value;

    var semail = document.getElementById('stdemail').value;

    var temp = {
        "name":sname ,
        "course":scourse ,
        "email":semail
    } 
    createRow(temp,data.length)

    data.push(temp); 
 



}

function createRow(student,i)
{
       var tr =  document.createElement('tr') 

       var td =  document.createElement('td')  
       var textdata =  document.createTextNode(i+1)  
       td.appendChild(textdata)
       tr.appendChild(td); 


       var td =  document.createElement('td')  
       var textdata =  document.createTextNode(student.name)  
       td.appendChild(textdata)
       tr.appendChild(td); 

       var td =  document.createElement('td')  
       var textdata =  document.createTextNode(student.course)  
       td.appendChild(textdata)
       tr.appendChild(td); 

       var td =  document.createElement('td')  
       var textdata =  document.createTextNode(student.email)  
       td.appendChild(textdata)
       tr.appendChild(td);  

       var td =  document.createElement('td')   
       var deletebutton =  document.createElement('button')  

       deletebutton.innerHTML = "Delete"   
       deletebutton.classList.add('btn') 
       deletebutton.classList.add('btn-danger') 
       deletebutton.onclick = function(){
        var temp  = confirm("r u sure u want to delete this data ???")
        
        if(temp)
        { 
            var r = this.closest('tr');
            r.remove(); 
            // Array remove 
       } 
    } 


    var updateButton =  document.createElement('button')  

    updateButton.innerHTML = "Update"   
    updateButton.classList.add('btn') 
    updateButton.classList.add('btn-info') 
    updateButton.classList.add('mx-3') 

    updateButton.onclick = function()
    {
       var tmp =  this.closest('tr')
     
       var index = tmp.rowIndex - 1 
       document.getElementById('stdname').value = data[index].name 
       document.getElementById('stdemail').value = data[index].email
       document.getElementById('stdcourse').value = data[index].course
       document.getElementById('stdindex').value = index

    }

       td.appendChild(deletebutton) 
       td.appendChild(updateButton)

       tr.appendChild(td); 




       tbody.appendChild(tr);


    

}

function display()
{
    for(var i=0;i<data.length;i++) 
    {
        createRow(data[i],i)
    }
 
}

function auth()
{

    var emailtemp =   localStorage.getItem('email');
    if(emailtemp == '' || emailtemp == null || emailtemp == 'null' || emailtemp == undefined)
    {
        window.location.href = 'index.html'
    }
    else 
    {
        document.getElementById('authuser').innerHTML = "Hello "+emailtemp
    }

}

function updatestd()
{
   var tname =  document.getElementById('stdname').value
      var temail =  document.getElementById('stdemail').value
      var tcourse =  document.getElementById('stdcourse').value 
       var i = document.getElementById('stdindex').value  ;


       var tdata =  {
        "name":tname,
        "course":tcourse,
        "email":temail

    } 

    data[i] = tdata ;

    console.log("new updated array " + JSON.stringify(data));
    tbody.innerHTML = '';
    display();
}
