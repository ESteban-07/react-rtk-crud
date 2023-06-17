import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container
      fluid
      className="min-vh-100 pt-4"
      style={{ backgroundColor: '#213555' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
