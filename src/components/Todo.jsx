const Todo = ({ todo, toggleExerciseCompletion, deleteExercise }) => {
  return (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <h3>{todo.category}</h3>
      <ul>
        {todo.exercises.map((exercise, index) => (
          <li key={index} className={exercise.isCompleted ? "completed" : ""}>
            <span>
              {exercise.exercise} ({exercise.bodyPart}, {exercise.repetitions})
            </span>
            <div className="buttons">
              <button onClick={() => toggleExerciseCompletion(todo.id, index)}>
                {exercise.isCompleted ? "Desmarcar" : "Concluir"}
              </button>
              <button
                className="remove"
                onClick={() => deleteExercise(todo.id, index)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

