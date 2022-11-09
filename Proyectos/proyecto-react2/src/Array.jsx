export function Array1(){
    const lista =["Madrid","Valencia","Barcelona","Huelva"]
    return (
    <ul>
    {lista.map((item, index) => <li key={index}>{item}</li>)}
  </ul>)
}
