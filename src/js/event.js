window.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header');
    const headerFeature = document.querySelector('.header-feature');

    let beforePosition = 0;
    headerFeature.style.display = 'none';

    window.addEventListener('scroll', (e)=>{
        let afterPosition = document.documentElement.scrollTop; 
        
        if(afterPosition > 0){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }

        if(afterPosition>=160){
            headerFeature.style.display = 'block';

            if(beforePosition < afterPosition){
                //scroll down
                setTimeout(()=>{
                    header.classList.add('hide');
                    headerFeature.classList.add('active')
                },0)
            }else{
                //scroll up
                header.classList.remove('hide');
                headerFeature.classList.remove('active');
                if(document.querySelector('.list-gnb-li.on')!==null){
                    document.querySelector('.list-gnb-li.on').classList.remove('on');
                }
            }
            beforePosition = afterPosition;

        }else{
            header.classList.remove('hide');
            headerFeature.style.display = 'none';
            headerFeature.classList.remove('active');

        }

    });
});