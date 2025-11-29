/*4️⃣ Mostrar/Esconder texto

Crie um botão que:

quando clicar → mostra um texto

quando clicar de novo → esconde o texto

Use useState(false). */




import { useState } from 'react'


function EsconderTexto() {
  const [textoVisivel, setTextoVisivel] = useState(false)


function Visivel () {
  if (textoVisivel == false) {
    setTextoVisivel(true)
  }else {
    setTextoVisivel(false)
  }
}

  return (
    <>
    <h1>Mostrar/Esconder texto</h1>
  <h4>Visivel:
{textoVisivel && " pao"}
{!textoVisivel && ""}
  </h4>
  <button onClick={Visivel}>Click</button>

   __________________________________________________
    <br/>
    </>
    
    
  )
}

export default EsconderTexto
