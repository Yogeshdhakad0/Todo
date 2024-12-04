 const form=document.querySelector("form");
 const input=document.querySelector('input')
const ul=document.querySelector("ul");

 const run=(e)=>{
  

e.preventDefault();
let li=document.createElement("li");

li.innerText=input.value;











// li.style.animation='  3s linear 1s slide-in'
li.style.height=''
li.className="lisr-group-item rounded-0  w-100 border border-bottom-1  bg-dark my-2 py-2 px-2  ";
let button =document.createElement("button");

button.innerHTML='button'

 

button.className='btn btn-sm  btn btn-danger rounded-1 float-end  '
li.appendChild(button)


ul.appendChild(li)
// ul.appendChild(button)


ul.appendChild(button1);
ul.appendChild(button2);
ul.appendChild(button3);


 form.reset()
 }






 








 let button1=document.createElement('button');
 button1.innerHTML='clear ';
 button1.className='   rounded-1  w-25 my-2  btn btn btn-warning d-inline-block'

 let button2=document.createElement('button');
 button2.innerHTML='Sort';
 button2.className='   rounded-1  w-25 my-2  btn  btn btn-warning float-end  '

const sortt=()=>{

    // console.log("I will sort")
const liitems = document.getElementsByClassName("lisr-group-item" )
const listitems = Array.from(liitems)
// console.log(listitems)

 listitems.sort((a,b)=>{return a.innerText.localeCompare(b.innerText)})
//  console.log(c)

const ParentUi = listitems[0].parentElement
ParentUi.innerText = ""

// console.log(ParentUi)

listitems.forEach((li)=>{
   ParentUi.append(li) 
   ParentUi.append(button1) 
   ParentUi.append(button2) 
   ParentUi.append(button3) 
})


}



 button2.addEventListener('click',sortt)


 let button3=document.createElement('button');
 button3.innerHTML='count';
 button3.className='   rounded-1  w-25 my-2   btn  btn btn-warning   button3 '

let cuut=0
 const cunnt=()=>{
cuut++

button3.innerHTML=cuut;
    
 }

form.addEventListener('submit',cunnt)





 form.addEventListener('submit', run);


const listremove=(e)=>{
    if(e.target.className.includes(" btn-danger")){
let li = e.target.parentElement;
   ul.removeChild(li)
    }
}




ul.addEventListener('click',listremove);








const run1 = () => {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
};
   
 button1.addEventListener('click', run1);




const reset = document.getElementById('reset');
const body = document.querySelector('body');
let count = 0;
const resetpage = (e) => {
    console.log('reset clicked');
    if (count % 2 === 0) {
        body.style.backgroundColor = 'rgb(46,24,50)';
        count++; 
    } else {
        body.style.backgroundColor = '#caf1de';
        count++; 
    }
} 

reset.addEventListener('click', resetpage); 





 
// const run2 = () => {
   
//         ul.remove();
  
// };
   
//  button1.addEventListener('dblclick', run2);



