window.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header');

    console.log(header);
    window.addEventListener('scroll', (e)=>{
        let scrollLocation = document.documentElement.scrollTop; 

        if(scrollLocation > 0){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }

    });
});