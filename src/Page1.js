import { createElement } from './utils';

function Page1() {
  const title = createElement('h2', { textContent: 'Member Task Manager' });

  const page3Link = createElement('a', {
    href: '/#/page3',
    textContent: 'Check Work',
  });

  return createElement('div', {}, [title, page3Link]);
}

export default Page1;


const STORAGE_KEY = 'memberTasks';

/** Load tasks from LocalStorage */
function loadTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/** Save tasks to LocalStorage */
function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/** Page 1 – Family Member Task Manager */
export function page1View() {
  const page = createElement('div', { className: 'fade-in' });

  // ---- Title ----
  const title = createElement('h2', {
    textContent: '👨‍👩‍👦 Family Member Task Manager',
    className: 'page-title'
  });

  // ---- Input Fields ----
  const nameInput = createElement('input', {
    type: 'text',
    placeholder: 'Family member name (e.g., Ethan)',
    className: 'task-input'
  });

  const taskInput = createElement('input', {
    type: 'text',
    placeholder: 'Task (e.g., Clean room)',
    className: 'task-input'
  });

  const addButton = createElement('button', {
    textContent: 'Add Task',
    className: 'btn'
  });

  // ---- Task List ----
  const list = createElement('ul', { className: 'task-list' });

  /** Re-render the list whenever data changes */
  function render() {
    list.innerHTML = '';
    const tasks = loadTasks();

    tasks.forEach((obj, index) => {
      const item = createElement('li', { className: 'task-item' });

      const text = createElement('span', {
        textContent: `${obj.name}: ${obj.task}`,
        className: 'task-text'
      });

      const deleteBtn = createElement('button', {
        textContent: '✖',
        className: 'delete-btn',
        onclick: () => {
          const updated = loadTasks();
          updated.splice(index, 1);
          saveTasks(updated);
          render();
        }
      });

      item.appendChild(text);
      item.appendChild(deleteBtn);
      list.appendChild(item);
    });
  }

  /** Add new task to LocalStorage */
  function addTask() {
    const memberName = nameInput.value.trim();
    const taskText = taskInput.value.trim();

    if (!memberName || !taskText) return;

    const tasks = loadTasks();
    tasks.push({ name: memberName, task: taskText });
    saveTasks(tasks);

    nameInput.value = '';
    taskInput.value = '';

    render();
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  // Initial list render
  render();

  // ---- Build Final Page ----
  page.appendChild(title);
  page.appendChild(nameInput);
  page.appendChild(taskInput);
  page.appendChild(addButton);
  page.appendChild(list);

  return page;
}
