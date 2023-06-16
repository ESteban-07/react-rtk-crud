import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import Header from './Header';
import { useEffect } from 'react';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  // set tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header />

      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
