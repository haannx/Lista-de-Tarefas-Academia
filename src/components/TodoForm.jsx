import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [exerciseCategory, setExerciseCategory] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [repetitions, setRepetitions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !exerciseCategory || !bodyPart || !repetitions) return;
    addTodo({
      exercise: value,
      category: exerciseCategory,
      bodyPart: bodyPart,
      repetitions: repetitions,
    });
    setValue("");
    setExerciseCategory("");
    setBodyPart("");
    setRepetitions("");
  };

  return (
    <div className="todo-form">
      <h2>Criar treino:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Qual o nome do seu treino?"
          value={exerciseCategory}
          onChange={(e) => setExerciseCategory(e.target.value)}
        />

        <select value={bodyPart} onChange={(e) => setBodyPart(e.target.value)}>
          <option value="">Qual musculo deseja treinar?</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
          <option value="Peito">Peito</option>
          <option value="Ombros">Ombros</option>
          <option value="Costas">Costas</option>
          <option value="Pernas">Pernas</option>
        </select>

        <input
          type="text"
          placeholder="Qual o treino na categoria acima que deseja fazer?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
        >
          <option value="">Quantas repetições e séries?</option>
          <option value="3x8">3x8</option>
          <option value="3x10">3x10</option>
          <option value="3x12">3x12</option>
          <option value="3x15">3x15</option>
          <option value="4x8">4x8</option>
          <option value="4x10">4x10</option>
          <option value="4x12">4x12</option>
          <option value="4x15">4x15</option>
        </select>

        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;


