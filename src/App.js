import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from '../src/router/router/Router';
import './App.css';
function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      ></Toaster>
    </div>
  );
}

export default App;
