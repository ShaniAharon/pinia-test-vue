import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

const KEY = 'todoDB';

export const todoService = {
  query,
  getById,
  remove,
  save,
  getEmptyTodo,
};

_createTodos();

function query() {
  console.log('runing');
  return storageService.query(KEY);
}

function getById(id) {
  return storageService.get(KEY, id);
}

function remove(id) {
  return storageService.remove(KEY, id);
}

function save(todo) {
  const savedTodo = todo._id
    ? storageService.put(KEY, todo)
    : storageService.post(KEY, todo);
  return savedTodo;
}

function getEmptyTodo(txt = 'do it', done = false) {
  return {
    _id: '',
    txt,
    done,
    createdAt: Date.now(),
  };
}

// Create Test Data:
function _createTodos() {
  var todos = JSON.parse(localStorage.getItem(KEY));
  if (!todos || !todos.length) {
    todos = [
      _createTodo('just do it'),
      _createTodo('yes you can'),
      _createTodo(),
    ];
    console.log('todos', todos);
    localStorage.setItem(KEY, JSON.stringify(todos));
  }
  return todos;
}

function _createTodo(txt) {
  const todo = getEmptyTodo(txt);
  todo._id = utilService.makeId();
  return todo;
}
