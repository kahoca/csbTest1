import "./styles.css";
import { mockCommand } from "./types/Command";
import { AnyModule, Modules } from "./types/Modules";

type PropsType = {
  i: AnyModule;
};

const FromOrToInfo = ({ i }: PropsType) => {
  switch (i.Module) {
    case Modules.Account:
      return (
        <>
          <h3>{i.Name}</h3>
          <h3>({i.Module})</h3>
          <h6>email: {i.Email}</h6>
        </>
      );
    case Modules.Wallet:
      return (
        <>
          <h3>{i.Name}</h3>
          <h3>({i.Module})</h3>
        </>
      );
    default:
      return <>unknown Module ("{i.Module}")</>;
  }
};

export default function App() {
  const c = mockCommand;

  const f = c.data._xtra.From;
  const t = c.data._xtra.To;

  const b: any = c.data._xtra.From;
  const canEdit = c.myPermissions.indexOf("add") >= 0;
  const canDelete = c.myPermissions.indexOf("delete") >= 0;

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
            <FromOrToInfo i={f} />
          </div>
          <div>
            <h2>Bu hesaba</h2>
            <FromOrToInfo i={t} />
          </div>
        </div>
      </div>

      <h2>İşlem tutarı</h2>
      <div>
        balances:
        {b.Balances?.map((b: any, i: number) => (
          <div key={i}>{`${b.CUCode}: ${b.Amount.toFixed(2)} ${b.Sign}`}</div>
        ))}
      </div>
      {canEdit && <button>edit</button>}
      {canDelete && <button>delete</button>}
      <h1>v-6</h1>
    </div>
  );
}
