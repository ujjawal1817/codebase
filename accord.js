const accord_header = document.querySelectorAll(".accord_header");
const content=document.querySelectorAll(".accord_content");

accord_header.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        content[i].classList.toggle("expand");
        e.classList.toggle("is-Open");
    })
})
