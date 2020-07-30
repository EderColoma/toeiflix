import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo(){

    return(
        <PageDefault>
            <div>
                <h1>P&aacute;gina de Cadastro de V&iacute;deos</h1>
            </div>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );

}

export default CadastroVideo;