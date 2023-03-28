
animateSkillBars();

function animateSkillBars(){
    const skillBars = document.querySelectorAll('.skill-bar-percentage');
    const totalWidth = document.querySelectorAll('.skill-bars')[0].clientWidth;
    console.log(totalWidth);
    let filled = false;
    fillAllBars();

    function fillAllBars(){
        for(let bar of skillBars){
            let requiredWidth = totalWidth * bar.dataset.skillPercentage / 100;
            // let currentWidth = getComputedStyle(bar).getPropertyValue('width');
            let currentWidth = bar.clientWidth;
            console.log(requiredWidth, currentWidth);
            let animationId = setInterval(function(){
                if(currentWidth + 10 > requiredWidth){
                    currentWidth = requiredWidth;
                    bar.style.width = currentWidth + "px";
                    clearInterval(animationId);
                    console.log('interval cleared');
                    return;
                }
                currentWidth += 2;
                bar.style.width = currentWidth + "px";
            }, 16);
            console.log(getComputedStyle(bar));
        }
    }

    function fillAnimation(bar){

    }

}