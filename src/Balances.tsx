import { BalanceType } from "./types/Modules"

type PropsType2 = {
    b: BalanceType[] | undefined
  }
  const Balances = ({ b }: PropsType2) => {
    return <>
    {b ? "Son durum":null}
      {b?.map((b: any, i: number) => (
        <div key={i}>{`${b.CUCode}: ${b.Amount.toFixed(2)} ${b.Sign}`}</div>
      ))}
    </>
  }

  export default Balances