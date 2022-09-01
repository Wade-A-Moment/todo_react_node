import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    )
    return todos
  } catch (error: unknown) {
    if (error instanceof Error) {
        throw new Error(error.message)
    } else {
        throw new Error("Failed to get " + baseUrl.toString() + "/todos")
    }
  }
}