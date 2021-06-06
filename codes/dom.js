
// DOM Manipulation 
// Examine the document object
console.dir(document)

// EXAMOINE DOM OBJECT USING .document

console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.head)
console.log(document.body)
console.log(document.all) // will give us array of all tags
console.log(document.all[1]) // will give us array of all tags
document.title = "Larning JS from YouTube"
console.log(document.title)

console.log(document.forms) // collection of all forms in the page
console.log(document.links) // HTML collection in array 
console.log(document.images) // HTML collection all the images 


// SELECTORS 

var getPagetitle= document.getElementById('page-title');
console.log(getPagetitle);
getPagetitle.textContent = 'JS learning Course 4566';
getPagetitle.innerText = 'MIT course';
getPagetitle.innerHTML= '<h1>MIT course</h1>';
getPagetitle.style.borderBottom  = 'solid 3px red';

// GET ELEMENTS BY CLASS NAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);

items[1].textContent = 'list 2 risus, porta ac consectetur'
items[1].style.fontWeight ='bold'

for(var i = 0; i < items.length; i++)
{
  items[i].style.backgroundColor = '#f4f4f4';
  items[1].style.textTransform = 'uppercase'
}

  
// GETTING ELEMENTS BY TAG NAME

var liitem = document.getElementsByTagName('li')
console.log(liitem)

for(var i = 0; i < liitem.length; i++)
{
  liitem[i].style.backgroundColor = '#f4f4f4';
  liitem[1].style.textTransform = 'Capitalize'
}


// QUERY SELECTOR - works like JQUERY

var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 8px #ccc'





function myFunction() {
    var tt = document.URL
    console.log(tt)
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("Microsoft", tt);
    document.getElementById("demo").innerHTML = res;
  }