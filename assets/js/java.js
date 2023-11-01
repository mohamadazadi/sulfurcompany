// function dropDowns(){
//    var parentdp = document.getElementById('dropdownshow');
//    var childdp = document.getElementById('itemsshow');
//     if(childdp.style.display==='block'){
//         childdp.style.display='none'
//     }
//     else{
//         childdp.style.display ='block'
//     }
    
// }
// document.addEventListener('click', function(event) {
//     var dropdown = document.getElementById('dropdownshow');
    
//     if (!dropdown.contains(event.target)) {
//       var childdp = document.getElementById('itemsshow');
//       childdp.style.display = 'none';
//     }
//   });
 
  function dropDowns() {
    var parentdp = document.getElementById('dropdownshow');
    var childdp = document.getElementById('itemsshow');
    
    if (childdp.style.display === 'flex') {
      childdp.style.display = 'none';
    } else {
      childdp.style.display = 'flex';
    }
  }
  
  document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('dropdownshow');
  
    if (!dropdown.contains(event.target)) {
      var childdp = document.getElementById('itemsshow');
      childdp.style.display = 'none';
    }
  });
  
  // Add the event listener to each dropdown item
  var dropdownItems = document.getElementsByClassName('dropdown-item');
  for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', function(event) {
      // Prevent the click event from bubbling up to the parent dropdown
      event.stopPropagation();
    });
  }
  function dropDownstwo() {
    var parentdp = document.getElementById('dropdownshow1');
    var childdp = document.getElementById('itemsshow1');
    
    if (childdp.style.display === 'flex') {
      childdp.style.display = 'none';
    } else {
      childdp.style.display = 'flex';
    }
  }
  
  document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('dropdownshow1');
  
    if (!dropdown.contains(event.target)) {
      var childdp = document.getElementById('itemsshow1');
      childdp.style.display = 'none';
    }
  });
  
  // Add the event listener to each dropdown item
  var dropdownItems = document.getElementsByClassName('dropdown-item');
  for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', function(event) {
      // Prevent the click event from bubbling up to the parent dropdown
      event.stopPropagation();
    });
  }
  function burgerMenu(){
    var burgur = document.getElementById("burgurmenu");
    if(burgur.style.display=== 'none'){
      burgur.style.display = 'block'
    }
    else{
      burgur.style.display= 'none'
    }
  }