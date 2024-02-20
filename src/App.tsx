import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import "../src/styles.css";
import Table from "component/Table";
import Command from "container/Command";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-lg font-semibold">Toy Robot</h1>
        <div className="flex flex-row justify-between p-4">
          <Command />
          <Table />
        </div>
      </div>
    </Provider>
  );
}

export default App;
