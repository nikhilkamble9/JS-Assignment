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
// const newTodoInput = document.querySelector('input');
// const addTodoBtn = document.querySelector('button');
// const todolist = document.querySelector('div.todos');
// let count = 0;
// let removeCount = 0;
// addTodoBtn.onclick = function(){
//     let input = newTodoInput.value;
//     if(input.length === 0) {
//     alert("Please enter a task");
//     } else {
//     todolist.innerHTML +=`<p key="${count}">${input}</p>`
//     count++;
//     let remover = document.querySelectorAll(`p[key=${str(removeCount)}]`).value
//     remover.onclick = function(){
//         for(let i=0; i<remover.length; i++){
//             this.remove();
//             removeCount++;
//         }
//     };
//     }
// }