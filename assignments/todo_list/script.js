let count = 0;
document.querySelector('.addbutton').onclick = function(){
    let input = document.querySelector('.input').value
    if(input.length === 0){
        alert('please enter the value')
    }else{
        document.querySelector('.todos').innerHTML += `<p key=${count}>${input}</p>`;
        count ++
    }
    let remover = document.querySelectorAll('.todos>p')
    for(let i=0; i< remover.length; i++){
        remover[i].onclick = function(){
            this.remove();
        }
    }
}
function removeAll(){
    document.querySelector('.todos').innerHTML = "";
}
async function apitodo(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = '';
    let pending = '';
    data.forEach(function(todo, index) {
        if(todo.completed===true){
            output +=`<p key=${index}>${todo.title}</p>`;
            document.querySelector('.completed').innerHTML = output;
        }
        else if(todo.completed===false){
            pending +=`<p key=${index}>${todo.title}</p>`;
            document.querySelector('.pending').innerHTML = pending;
        }
    });
    
}
apitodo();