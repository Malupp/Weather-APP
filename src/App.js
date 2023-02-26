import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header"
import "./assets/index.css";

export function App() {
  return (
    <div className="flex flex-col mt-10 text-center items-center">
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
