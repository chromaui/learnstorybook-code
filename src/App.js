import { Provider } from "react-redux";
import store from "./lib/redux";
import TaskList from "./components/TaskList";
function App() {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
}

export default App;
