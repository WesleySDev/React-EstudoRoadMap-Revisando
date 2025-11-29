/*1️⃣ Contador com 3 botões

Crie um componente com:

botão +1

botão -1

botão resetar para 0

Use useState para controlar o número. */




import { useState } from 'react'


function Contador() {
  const [numero, setNumero] = useState(0)




  return (
    <>
    <h1>Contador</h1>
    <p>{numero}</p>
     <button onClick={() => setNumero(numero + 1)}>Adicionar + 1</button>
     
     <button onClick={() => setNumero(numero - 1)}>Eliminar - 1</button>

     <button onClick={() => setNumero(0)}>Resetar</button>
     <br/>
     __________________________________________________________
    </>
    
    
  )
}

export default Contador
