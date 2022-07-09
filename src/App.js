import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import New from "./pages/New";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/new"} element={<New />} />
          <Route path={"/edit/:id"} element={<New />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
