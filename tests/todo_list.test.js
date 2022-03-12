describe('todo_list', () => {
    test('C t', () => {
        document.body.innerHTML = `
            <div>
                <input type='text' name='todo_input'>
                <button type='submit'>Add Todo</button>
                <div class='todos'></div>
            </div>
        `;
        require('../assignments/todo_list/script');

        const newTodoInput = document.querySelector('input');
        const addTodoBtn = document.querySelector('button');
        const todolist = document.querySelector('div.todos');

        newTodoInput.value = 'New todolist!';
        addTodoBtn.click();

        expect(todolist.innerHTML).toBe('<p key="0">New todolist!</p>');

        newTodoInput.value = "Second Todo";
        addTodoBtn.click();

        expect(todolist.innerHTML).toBe('<p key="0">New todolist!</p><p key="1">Second Todo</p>');

        document.querySelector('p[key="0"]').click();
        expect(todolist.innerHTML).toBe('<p key="1">Second Todo</p>');
      });
})