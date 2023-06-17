import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import Header from './Header';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  // set tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container className="d-flex flex-column justify-content-center gap-4">
      <Row>
        <Col className="p-0">
          <Header />
        </Col>
      </Row>

      <Row className="gap-4">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </Row>
    </Container>
  );
}
