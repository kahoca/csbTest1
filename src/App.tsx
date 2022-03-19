import "./styles.css";
import { mockCommand } from "./types/Command";

export default function App() {
  const c = mockCommand;

  const f = c.data._xtra.From;
  const t = c.data._xtra.To;

  return (
    <div className="App">
      <h1>Bilgi fişi</h1>
      <h2>İşlem bilgileri</h2>
      <h3>Date: {c.data.header.date}</h3>
      <h3>Document no: {c.data.header.BelgeNo}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 50 }}>
            <h2>Bu hesaptan</h2>
            <h3>{f.Name}</h3>
            <h3>({f.Module})</h3>
            <h6>email: {f.Email}</h6>
          </div>
          <div>
            <h2>Bu hesaba</h2>
            <h3>{t.Name}</h3>
            <h3>({t.Module})</h3>
          </div>
        </div>
      </div>

      <h2>İşlem tutarı</h2>
      <div>
        balances:
        {c.data._xtra.From.Balances.map((b) => (
          <div>{`${b.CUCode}: ${b.Amount.toFixed(2)} ${b.Sign}`}</div>
        ))}
      </div>
      <h1>v-6</h1>
    </div>
  );
}
