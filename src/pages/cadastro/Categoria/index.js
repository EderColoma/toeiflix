import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }
  const [valores, setValores] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValor(chave, valor){
      setValores({
        ...valores,
        [chave]: valor
      });
  }

  function handleChange(e){
    //const{getAttribute, value} = e.target;
    setValor(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(e){
        e.preventDefault();
        setCategorias([...categorias, valores]);
        setValores({});

        setValores(valoresIniciais);
      }}>
        <FormField 
            label="Nome:&nbsp;"
            type="text"
            name="nome"
            value={valores.nome}
            onChange={handleChange}/>
        <div>
          <label>
            Descri&ccedil;&atilde;o:
            <textarea 
             name="descricao"
             value={valores.descricao} 
             onChange={handleChange}/>
          </label>
        </div>
        <FormField
            label="Cor:&nbsp;"
            type="color"
            name="cor"
            value={valores.cor}
            onChange={handleChange}/>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
          {categorias.map((categoria, indice) => {
            return (
                <li key={`${categoria.nome}${indice}`}>
                  {categoria.nome}
                </li>
            );
          })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;