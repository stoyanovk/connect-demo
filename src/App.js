import { Counter } from "./components/Counter";
import { UserInfo } from "./components/UserInfo";
import { UserList } from "./components/UserList";
import "./styles.css";

export default function App() {
  console.log("render App");
  return (
    <div className="App">
      <h1>My little demo</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="d-flex">
        <Counter />
        <UserInfo />
        <UserList />
      </div>
    </div>
  );
}
