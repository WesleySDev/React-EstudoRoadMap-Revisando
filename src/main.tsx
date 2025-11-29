import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Contador from './hooks/useState/Contador.tsx'
import CapituradoTexto from './hooks/useState/CapituradorTexto.tsx'
import AlteradorDeTema from './hooks/useState/AlteradorDeTema.tsx'
import EsconderTexto from './hooks/useState/MostrarEsconderTexto.tsx'
import ListaSimples from './hooks/useState/ListaSimplesAdicionaItens.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contador />
    <CapituradoTexto />
    <AlteradorDeTema/>
    <EsconderTexto/>
    <ListaSimples/>
  </StrictMode>,
)
