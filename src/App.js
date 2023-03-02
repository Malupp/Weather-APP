import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Header } from "./Components/Header";
import "./assets/index.css";
import { Provider } from "react-redux";
import store from "./store/store";

export function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col mt-10 text-center items-center">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
