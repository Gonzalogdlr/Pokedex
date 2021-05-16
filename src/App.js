import "./App.css";
import Card from "./components/Card.js";
import { QueryClient, QueryClientProvider } from "react-query";
import Pagination from "./components/Pagination";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={"relative h-screen max-w-md m-auto overflow-auto bg-black"}>
        <Pagination></Pagination>
      </div >
    </QueryClientProvider>
  );
}
export default App;
