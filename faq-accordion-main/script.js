const ques= document.querySelectorAll(".Question");
ques.forEach(q => {
  q.addEventListener("click", ()=>{
    const Answer= q.nextElementSibling;
    const plusImg= q.querySelector(".plusImg");
    const minusImg= q.querySelector(".minusImg");
    if(Answer.style.maxHeight){
      Answer.style.maxHeight=null;
      plusImg.style.display="block";
      minusImg.style.display="none";
    }else{
      Answer.style.maxHeight= Answer.scrollHeight + "px";
      plusImg.style.display="none";
      minusImg.style.display="block";
    }
  })
});