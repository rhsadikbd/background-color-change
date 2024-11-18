
const body = document.getElementById('body');

const buttons = document.querySelectorAll('li');

buttons.forEach(function(value){
    value.addEventListener('click', function(){
        let className = this.classList.value;
        let color = '';
        if(className === 'red'){
            color = '#ff4d4d';
        }
        if(className === 'green'){
            color = '#32ff7e';
        }
        if(className === 'blue'){
            color = '#4b7bec';
        }
        if(className === 'black'){
            color = '#4b4b4b';
        }
        if(className === 'yellow'){
            color = '#fffa65';
        }
        body.style.backgroundColor = color;
    });
});