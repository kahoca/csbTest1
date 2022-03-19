import "./styles.css";
import { mockCommand } from "./types/Command";

export default function App() {
  const c = mockCommand;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>my CodeSandBox {c.data.header.date}</h3>
    </div>
  );
}
