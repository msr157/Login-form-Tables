console.log("Script Loaded Succesfully!!");

   var dataList = [] 
   var dataObj = {}
   var click = 0

document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";
  
  


 var firstName = document.getElementById("fName").value;
 var  lastName = document.getElementById("lName").value;
 var  emailId = document.getElementById("eMail").value;
  
  dataObj = {
    fname:firstName,
    lname:lastName,
    email:emailId
  }
  
  dataList.push(dataObj)
 
      for(var i = click; i<dataList.length;i++)
    {
       var table = document.getElementById("table");
       row = document.createElement("tr")
       first = document.createElement("td") ;
       last = document.createElement("td");
       email = document.createElement("td");
      first.innerHTML= dataList[i].fname;
      last.innerHTML= dataList[i].lname;
      email.innerHTML= dataList[i].email;
      
      table.appendChild(row)
      row.appendChild(first)
      row.appendChild(last)
      row.appendChild(email)
      click = click+1
    }

      
    
      document.getElementById("fName").value = ""
      document.getElementById("lName").value = ""
      document.getElementById("eMail").value = "" 
    
  
  return false;
};

$('th').on('click', function(){
  var column = $(this).data('column')
  var order = $(this).data('order')
  
  if(order=='desc'){
    $(this).data('order', 'asc')
    dataList = dataList.sort((a,b)=>a[column]>b[column]?1:-1)
    var table = document.getElementById("table");
    var x = table.rows.length
     for(var j=x;j>1;j--)
       {
         table.deleteRow(j-1)
       }
    for(var i =0; i<dataList.length;i++)
    {
       row = document.createElement("tr")
       first = document.createElement("td") ;
       last = document.createElement("td");
       email = document.createElement("td");
      first.innerHTML= dataList[i].fname;
      last.innerHTML= dataList[i].lname;
      email.innerHTML= dataList[i].email;
      
      table.appendChild(row)
      row.appendChild(first)
      row.appendChild(last)
      row.appendChild(email)
    }
  }
  else{
    $(this).data('order','sec')
    dataList = dataList.sort((a,b)=>a[column]<b[column]?1:-1)
  }
  
  
  
console.log(column, order)
})


 



            
            
 


// function searchFun() {
//   let filter = document.getElementById("myInput").value.toUpperCase();
//   let myTable = document.getElementById("table");
//   let tr = document.getElementsByTagName("tr");
//   for (let i = 0; i < tr.length; i++) {
//     let td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       let textValue = td.textContent || td.innerHTML;
//       if (textValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// };