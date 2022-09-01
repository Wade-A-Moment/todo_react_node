import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"
const getToDosUrl: string = baseUrl + "/todos"
const addTodoUrl: string = baseUrl + "/add-todo"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
        getToDosUrl
    )
    return todos
  } catch (error: unknown) {
    throw new Error(
        (error instanceof Error) 
        ? error.message 
        : "Failed to getToDosUrl: " + getToDosUrl)
  }
}

export const addTodo = async (
    formData: ITodo
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const todo: Omit<ITodo, "_id"> = {
        name: formData.name,
        description: formData.description,
        status: false,
      }
      const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
        addTodoUrl,
        todo
      )
      return saveTodo
    } catch (error) {
        throw new Error(
            (error instanceof Error) 
            ? error.message 
            : "Failed to addTodoUrl: " + addTodoUrl)
    }
}

export const updateTodo = async (
    todo: ITodo
  ): Promise<AxiosResponse<ApiDataType>> => {
    const updateTodoUrl:string = `${baseUrl}/edit-todo/${todo._id}`;
    try {
      const todoUpdate: Pick<ITodo, "status"> = {
        status: true,
      }
      const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
        updateTodoUrl,
        todoUpdate
      )
      return updatedTodo
    } catch (error) {
        throw new Error(
            (error instanceof Error) 
            ? error.message 
            : "Failed to updateTodoUrl: " + updateTodoUrl)
    }
  }

export const deleteTodo = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    const deletedTodoUrl: string = `${baseUrl}/delete-todo/${_id}`
    try {
      const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
        deletedTodoUrl
      )
      return deletedTodo
    } catch (error) {
        throw new Error(
            (error instanceof Error) 
            ? error.message 
            : "Failed to deletedTodoUrl: " + deletedTodoUrl)
    }
}
