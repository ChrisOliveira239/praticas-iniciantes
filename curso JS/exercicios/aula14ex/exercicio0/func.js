function calcular(){
    var num = document.getElementById('num');
    var tab = document.getElementById('tab');
    
    if(num.value.length == 0){
        alert('INPUT VAZIO')
    }
    else{
        tab.innerHTML = ``;
        num = Number(num.value);
        for(c = 1 ; c<=10 ; c++ ){
            var item = document.createElement('option');
            item.text =`${num} X ${c} = ${num*c}`;
            tab.appendChild(item);
        }
    }
}