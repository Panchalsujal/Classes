import AppRoutes from "./features/auth/Routes/App.Routes.jsx";
import "./index.css";
import { AuthProvider } from "./features/auth/Context/auth.context.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
