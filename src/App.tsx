import Balances from "./Balances";
import Lines from "./Lines";
import "./styles.css";
import { mockCommand } from "./types/Command";
import { AnyModule, mockBuilding, Modules } from "./types/Modules";

type PropsType = {
  card: AnyModule;
};



const AnyModuleInfo = ({ card }: PropsType) => {
  switch (card.Module) {
    case Modules.Account:
      return (
        <>
          <h3>{card.Name}</h3>
          <h3>({card.Module})</h3>
          <h6>email: {card.Email}</h6>
          <Balances b={card.Balances} />
        </>
      );
    case Modules.Wallet:
      return (
        <>
          <h3>{card.Name}</h3>
          <h3>({card.Module})</h3>
          <Balances b={card.Balances} />
        </>
      );
    case Modules.Workshop:
      return <>
        <h3>{card.Name}</h3>
        <h3>({card.Module})</h3>
        <h6>Milyem: {card.Mily}</h6>
        <Balances b={card.Balances} />
      </>
    case Modules.Section:
      return <>
        <h3>{mockBuilding.Name}-{card.Name}</h3>
        <h3>({card.Module})</h3>
        <h6>Building: {card.BuildingId}</h6>
      </>
    default:
      return <>unknown Module ("{card.Module}")</>;
  }
};

export default function App() {
  const c = mockCommand;

  const f = c.data._xtra.From;
  const t = c.data._xtra.To;

  const ican = {
    Edit: c.myPermissions.indexOf("add") >= 0,
    Delete: c.myPermissions.indexOf("delete") >= 0
  };

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
            <AnyModuleInfo card={f} />
          </div>
          <div>
            <h2>Bu hesaba</h2>
            <AnyModuleInfo card={t} />
          </div>
        </div>
      </div>

      <h2>İşlem tutarı</h2>
      <div>
        <Lines l={c.data.lines} />
      </div>
      {ican.Edit && <button>edit</button>}
      {ican.Delete && <button>delete</button>}
      <h1>v-7</h1>
    </div>
  );
}
