
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
document.title = "New Title"
console.log(document.title)

console.log(document.forms) // collection of all forms in the page
console.log(document.links) // HTML collection in array 
console.log(document.images) // HTML collection all the images 


// SELECTORS 

var getPagetitle= document.getElementById('page-title');
console.log(getPagetitle);
getPagetitle.textContent = 'JS learning Course 4566'
getPagetitle.innerText = 'MIT course'
getPagetitle.innerHTML= '<h3>MIT course</h3>'

getPagetitle.style.black  = 'solid 3px red'

// GET ELEMENTS BY CLASS NAME

var selclass = document.getElementsByClassName('list-group-item')
console.log(selclass)


//  




function myFunction() {
    var tt = document.URL
    console.log(tt)
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("Microsoft", tt);
    document.getElementById("demo").innerHTML = res;
  }