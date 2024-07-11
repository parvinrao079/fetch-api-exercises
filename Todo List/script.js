document.addEventListener('DOMContentLoaded', () => 
{
  const todoList = document.getElementById('todo-list');

  // Fetch todos from JSON Placeholder API
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => 
    {
      todos.forEach(todo => 
      {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.title;
        // Apply Tailwind CSS classes based on completion status
        todoItem.className = `mb-2 p-2 rounded ${todo.completed ? 'bg-green-200 line-through' : 'bg-red-200'}`;
        todoList.appendChild(todoItem);
      });
    })
    .catch(error => 
    {
      console.error('Error fetching todos:', error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load todos.';
      errorMessage.className = 'text-red-500';
      todoList.appendChild(errorMessage);
    });
});
