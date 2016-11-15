
//var xhr=new XMLHttpRequest();
//
//xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
//
//xhr.onreadystatechange=function(e){
//    if(this.readyState===4 && this.status ===200)
//        {
//            var users = JSON.parse( this.response );
//
//            var usersList=$("#users");
//
//            $.each(users,function(index,user)
//            {
//                var content= "name: "+user.name+" username: "+user.username+" email: "+user.email;
//                usersList.append('<li>'+content+'</li>') 
//            });
//
//        }
//
//}
//
//xhr.send(null);

$.getJSON("https://jsonplaceholder.typicode.com/users",function(users){
     
    var usersList=$("#users");

    $.each(users,function(index,user)
    {
        var content= "name: "+user.name+" username: "+user.username+" email: "+user.email;
        usersList.append('<li>'+content+'</li>') 
    });
})