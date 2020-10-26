const plus =document.querySelectorAll('.plus');
const questions = document.getElementById('questions')

plus.forEach((plus)=>{
  plus.addEventListener('click',(e)=>{
    const ans=e.target.parentElement.parentElement.nextElementSibling;
    if(e.target.parentElement.className =='plus'){ // if we dont give if statement it will work but if user click some else it will error and nothing will work 

      ans.classList.toggle('show');
   
      const rotate=e.target;
      rotate.classList.toggle('rotate');
    }
    
  })
})

