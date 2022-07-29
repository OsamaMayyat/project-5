let header = document.querySelector('nav');
var items = document.querySelectorAll('.color-down .color-up');
var section = document.querySelector('#section7');

window.onscroll = function(){
    if(window.scrollY == 0){
        header.style.backgroundImage= 'null'
    }else{
        header.style.backgroundColor="rgb(15 116 143 / 70%)"
    }
    if(window.scrollY >= section.offsetTop -700){
        items.forEach(item => {
        item.style.width = item.dataset.width;
        });
    }else if(!(window.scrollY >= section.offsetTop -600)){
        items.forEach(item => {
        item.style.width = '0';
        });
    }
}