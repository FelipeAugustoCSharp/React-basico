//import Contador from "./Components/MeuContador"
//import MinhaList from "./Components/MinhaLista"
import { useEffect, useState } from "react"

export default function App() {

  useEffect(() =>{
    async function buscarDados(){
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }
    buscarDados().then(res => console.log(res));
  },[])

  return(
    <div>
      <h1>Buscando Dados</h1>
      <ol>
      {tarefas.map((tarf) => {
        return(
          <li key={tarf.id}>{tarf.title}</li>
        )
      })}
      </ol>
    </div>
  )
}






















/*
  const minhaLista= [
  {id: '1', value: 'Fruta'},
  {id: '2', value: 'Legume'},
  {id: '3', value: 'Carne'},
]

  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')
  useEffect(
    () => {
      if (pesquisa) {
        
      
      const novaList = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase())
      })
      setProdutos(novaList)
    }else{
      setProdutos(minhaLista)
    }
    }, [pesquisa])

  return (
    <div>
      <h1>Efeitos Colaterais</h1>
      <input
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}

      placeholder="pesquise aqui" />
      {produtos.map((item) => {
        return(
          <div key={item.id}>
            <h4> {item.value} </h4>
          </div>
        )
      })}
    </div>
  )*/