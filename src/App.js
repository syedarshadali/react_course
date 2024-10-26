import { BrowserRouter } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import AppRoutes from './components/AppRoutes';
import './App.css';
import { Suspense, useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';

function App() {

  const theme = useContext( ThemeContext );

  return (
    
    <div className={`app ${theme.theme}`}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>}>
          <AppNavBar />
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
