import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice';

// el store de Redux agrupa todos los datos o estados
// en un solo lugar para que sean accesibles en
// cualquier parte de la aplicación.
export const store = configureStore({
  reducer: { tasks: tasksReducer },
});
