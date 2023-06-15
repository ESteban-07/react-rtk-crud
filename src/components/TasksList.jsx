import { useSelector } from 'react-redux';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
}
