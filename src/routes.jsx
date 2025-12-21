import { createBrowserRouter } from 'react-router-dom';  
import { App } from './App.jsx';  
import { Components } from './pages/Components.jsx';

export const router = createBrowserRouter([  
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Components />,
      },
	  ],
  },
]);
