const slideBtn = document.getElementById('slide-btn')
const image = document.getElementById('test-image')
const content = document.getElementById('test-content')
const name = document.getElementById('test-name')
const title = document.getElementById('test-title')


slideBtn.addEventListener('click', (e)=>{
    if(e.target.id === "tanya"){
        image.src="images/image-tanya.jpg"
        content.innerHTML=`I\’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`
        name.innerHTML = "Tanya Sinclair"
        title.innerHTML = "UX Engineer"
    } else if (e.target.id === "john"){
        image.src="images/image-john.jpg"
        content.innerHTML=` “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
        name.innerHTML = "John Tarkpor"
        
        title.innerHTML = "Junior Front-end Developer"
    }
})

