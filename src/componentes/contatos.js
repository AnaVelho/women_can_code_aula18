import React, {Component} from 'react';

export default class contatos extends Component {

        state = {
            post: [
            {
                contatos: [
                    {
                      id: 1,
                      tipo: 'Telefone',
                      contato: '19 991963636'
                    },
                    {
                      id: 2,
                      tipo: 'Email',
                      contato: 'apfvelho@gmal.com'
                    
                     }
                 ],
                 educacoes: [
                    {
                      id: 1,
                      instituicao: 'EMEF',
                      curso: 'Ensino basico'
                    },
                    {
                      id: 2,
                      instituicao: 'ETEC',
                      curso: 'Como ser dev'
                    }
                  ]

            }]
        }
        

        render(){
            const { contatos, educacoes } = this.state.post[0];

            return(
                <>
                  <aside>
                      <div className="sidebar">
                      <h3>Contatos</h3>
                        {
                            contatos.map( contato => (
                                <div className="lista-de-contatos">
                                    <li>
                                        <div className="item-contato">
                                            <h4>{contato.tipo}</h4>
                                            <p>{contato.contato}</p>
                                        </div>
                                    </li>
                                </div>
                                )
                            )
                        }
                        </div> 
        
                        <div className="sidebar">
                            <h3>Educação</h3>
                            <div className="lista-de-formacao">
                                {
                                educacoes.map( educacao => (
                                    
                                        <li>
                                            <h4>{educacao.instituicao}</h4>
                                            <p>{educacao.curso}</p>
                                        </li>

                                        ))

                                }                          
                            </div>
                        </div>
                    </aside>
                </> 

            )
        }










}