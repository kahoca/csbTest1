type PropsType = {
    l: any
}

const Lines = ({ l }: PropsType) => {
    return <>
    {l ? "İşlemler:":null}
      {l?.map((b: any, i: number) => (
        <div key={i}>{`${b.CUCode}: ${b.Amount.toFixed(2)} ${b.Sign||""}`}{b.Comments}</div>
      ))}
    </>
}

export default Lines;