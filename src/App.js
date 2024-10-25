import './App.css';

import ParentComp from './components/ParentComp';
import { MessageProvider } from './contexts/MessageContext';

function App() {
  return (
    <div>

      <MessageProvider>
        <ParentComp />
      </MessageProvider>

    </div>
  );
}

export default App;




      {/* <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>}>
          
          <AppNavBar />
          <AppRoutes />

        </Suspense>

      </BrowserRouter> */}

      {/* <ProtectedRoute /> */}

      {/* <Counter /> */}
