import axios from "axios";

interface TodoInt {
  title: string;
  id: number;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  // const todo1 = response.data as TodoInt;
  const todo: TodoInt = response.data;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  logger(id, title, finished);
});

const logger = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
   `);
};
