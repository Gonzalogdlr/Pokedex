import "./App.css";
import Card from "./components/Card.js";
import { QueryClient, QueryClientProvider } from "react-query";
import Pagination from "./components/Pagination";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pagination></Pagination>
    </QueryClientProvider>
  );
}

export default App;
