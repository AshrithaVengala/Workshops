
    function addBook(){
        document.getElementById('content').innerHTML='<div>Name Of the Book <input type="text"></input></div><br>'+
                                                     '<div>Author Of the Book <input type="text"></input></div><br>'+
                                                     '<div>Price Of the Book <input type="text"></input></div><br>'+
                                                     '<div><input type="submit"></input></div>'
                                                        
    
                                                 
        

    }
   
    function removeBook(){
        document.getElementById('content').innerHTML='<div>mdn.Mozilla <input type="button" value="RemoveBook"></input><div><br>'+
                                                    '<div>geeksforgeeks   <input type="button" value="RemoveBook"></input><div><br>'+
                                                     '<div>letusc    <input type="button" value="RemoveBook"></input><div><br>'+
                                                     '<div>javaminds    <input type="button" value="RemoveBook"></input><div>'


    }
                                                    
    function editBook(){
         document.getElementById('content').innerHTML='<div>mdn.Mozilla <input type="button" value="Edit"></input><div><br>'+
                                                    '<div>geeksforgeeks   <input type="button" value="Edit"></input><div><br>'+
                                                     '<div>oracle.com    <input type="button" value="Edit"></input><div><br>'+
                                                     '<div>world wide web    <input type="button" value="Edit"></input><div>'


    }
      function listOfBooks(){
         document.getElementById('content').innerHTML='<div>mdn.Mozilla    mozilla     250<div><br>'+
                                                      '<div>world wide web  W3          300<div><br>'+
                                                     '<div> csshints         css         200<div><br>'+
                                                     '<div>w3schools         gfg          150<div>'


    }

    