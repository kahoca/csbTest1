import "./styles.css";
import { mockCommand } from "./types/Command";

export default function App() {
  const c = mockCommand;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Date: {c.data.header.date}</h3>
      <h3>Document no: {c.data.header.BelgeNo}</h3>
    </div>
  );
}
