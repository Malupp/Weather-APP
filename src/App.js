import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import "./assets/index.css";
import { Provider } from "react-redux";
import store from "./store/store";

export function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col text-center items-center bg-sprinkle bg-cover md:h-screen h-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
