import "./index.css";
import store from "./lib/store";

import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
