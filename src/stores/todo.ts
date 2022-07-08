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
  id: 'todo',
  state: (): State => ({
    todos: [],
  }),
  getters: {
    todos: (state) => state.todos,
  },
  actions: {
    async loadTodos() {
      const todos = await todoService.query()
      this.updateTodos(todos)
    },
    updateTodos(payload: any) {
      console.log('payload', payload.todos)
      this.todos = payload.todos
    },
    clearTodos() {
      this.$reset()
    },
  },
})
