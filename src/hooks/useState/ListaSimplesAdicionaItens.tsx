/*Lista simples que adiciona itens

Crie um input e um botão:

digite algo no input

clique no botão

adiciona o texto a uma lista na tela

Use useState([]) para armazenar a lista. */




import { useState } from 'react'


function ListaSimples() {
    const [texto, setTexto] = useState("")
    const [lista, setLista] = useState([])

function adicionarItem () {
  if (texto.trim() == "") return; // ( trim ) evita itens vazios

  setLista([...lista, texto]); // adiciona novo item

  setTexto("")  // limpa o input
}





  return (
    <>
    <h1>Lista simples que adiciona itens</h1>
  <input type="text"
  value={texto} 
  onChange={(e) => setTexto(e.target.value)}/>
  <button onClick={adicionarItem}>Adicionar</button>

  <ul>
    {lista.map((item,index) =>(
      <li key={index}>{item}</li>
    ))}
  </ul>
    </>
    
    
  )
}

export default ListaSimples
