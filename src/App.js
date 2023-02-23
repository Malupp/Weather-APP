import Footer from "./Components/Footer";
import { Main } from "./Components/Main";
import "./index.css";

export function App() {
  return (
    <div className="flex flex-col mt-10 text-center items-center">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
