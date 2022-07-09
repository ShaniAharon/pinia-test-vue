import {defineStore} from 'pinia'
import {todoService} from '.././services/todo.service.js'

interface Todo {
  _id: string
  txt: string
  done: boolean
  createdAt: Date
}

interface State {
  todos: Todo[]
}

export const useTodoStore = defineStore({
  id: 'todos',
  state: (): State => ({
    todos: [],
  }),
  getters: {
    getTodos: (state) => state.todos,
  },
  actions: {
    async loadTodos() {
      const todos = await todoService.query()
      console.log('todosss', todos)
      // this.updateTodos(todos)
      this.todos = todos
    },
    updateTodos({todos}: any) {
      console.log('payload', todos)
      this.todos = todos
    },
    async addTodo(todo: Todo) {
      const savedTodo = await todoService.save(todo)
      this.todos.push(savedTodo)
    },
    clearTodos() {
      this.$reset()
    },
  },
})
