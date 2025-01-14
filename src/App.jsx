import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = ({ exercise, category, bodyPart, repetitions }) => {
    setTodos((prevTodos) => {
      const existingCategory = prevTodos.find((todo) => todo.category === category);

      if (existingCategory) {
        return prevTodos.map((todo) =>
          todo.category === category
            ? {
                ...todo,
                exercises: [
                  ...todo.exercises,
                  { exercise, bodyPart, repetitions, isCompleted: false },
                ],
              }
            : todo
        );
      } else {
        return [
          ...prevTodos,
          {
            id: Math.floor(Math.random() * 10000),
            category,
            exercises: [
              { exercise, bodyPart, repetitions, isCompleted: false },
            ],
            isCompleted: false,
          },
        ];
      }
    });
  };

  const toggleExerciseCompletion = (todoId, exerciseIndex) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              exercises: todo.exercises.map((exercise, index) =>
                index === exerciseIndex
                  ? { ...exercise, isCompleted: !exercise.isCompleted }
                  : exercise
              ),
            }
          : todo
      )
    );
  };

  const deleteExercise = (todoId, exerciseIndex) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              exercises: todo.exercises.filter((_, index) => index !== exerciseIndex),
            }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.category.toLowerCase().includes(search.toLowerCase()) ||
            todo.exercises.some(
              (exercise) =>
                exercise.exercise.toLowerCase().includes(search.toLowerCase()) ||
                exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) // Filtra pela parte do corpo
            )
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.category.localeCompare(b.category)
              : b.category.localeCompare(a.category)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleExerciseCompletion={toggleExerciseCompletion}
              deleteExercise={deleteExercise} // Passando a função de exclusão
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;





