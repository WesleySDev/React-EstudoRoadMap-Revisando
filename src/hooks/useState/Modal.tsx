//Modal Pop-up: Crie um modal pop-up que aparece quando um botão é clicado. Use o useState para controlar se o modal está visível ou não.

import { useState } from 'react'


function Modal() {
  
 const [viewmodal, setViewmodal] = useState(false)


 
  return (
  
   <div className="container">
      <button
        onClick={() => setViewmodal(true)}
      >
        Abrir Modal
      </button>

      {
        viewmodal &&
        <div className="modal">
          <div className="modal__card">
            <button
              onClick={() => setViewmodal(false)}
            >
              Fechar modal
            </button>
            <h3>modal</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloribus incidunt ab facilis alias inventore temporibus aliquam placeat eos beatae labore fugit, illum, sunt tempore laudantium, in omnis asperiores ducimus.</p>
          </div>
        </div>
      }

    </div>
    
    
  )
}

export default Modal
