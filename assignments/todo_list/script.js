let count = 0;
document.querySelector('.addbutton').onclick = function(){
    let input = document.querySelector('.input').value
    if(input.length === 0){
        alert('please enter the value')
    }else{
        document.querySelector('.todos').innerHTML += `<p key=${count}><span class="tasks">${input}</span></p>`;
        count ++
    }
    let remover = document.querySelectorAll('.tasks')
    for(let i=0; i< remover.length; i++){
        remover[i].onclick = function(){
            this.remove();
        }
    }
}
function removeAll(){
    document.querySelector('.todos').innerHTML = "";
}