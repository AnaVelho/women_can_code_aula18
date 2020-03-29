import React, {Component, setState } from 'react';

export default class experiencia extends Component {

    state = {
        contador: 0,
        post: [
        {
        experiencia: [
            {
                id: 1,
                cargo: 'Front',
                periodo: 'Agosto 2019',
                empresa: 'NASA',
                local: 'Nova York',
                conteudo: 'Fazia nada e ganhava bem',
                atual: false
            },
            {
                id: 2,
                cargo: 'Back',
                periodo: 'Agosto 2018 - Agosto 2019',
                empresa: 'CIA',
                local: 'Boston',
                conteudo: 'Fazia nada e ganhava mal',
                atual: false
            },
            {
                id: 3,
                cargo: 'Instrumentadora',
                periodo: 'Agosto 2009- ...',
                empresa: 'Smith+Nephew',
                local: 'Memphis',
                conteudo: 'Trabalha muito e ganha rios de money',
                atual: true
            }
            ]
       
        }]
  
       
    }
    render() {
        const { experiencia } = this.state.post[0];

        return(
            <>
                <div className="experience">
                <h2>Experiência Profissional</h2>
               
                    {
                        experiencia.map(experiencia => (
                            <>
                            <div className="experience-item">
                                
                                {
                                    !experiencia.atual ?
                                    (
                                        <>
                                        <div>
                                            <h4>{experiencia.cargo}</h4>
                                            <date>{experiencia.periodo}</date>
                                            <strong>{experiencia.empresa}</strong>
                                            <span>{experiencia.local}</span>
                                        </div>    
                                        
                                        <p>{experiencia.conteudo}</p>
                                        </>
                                    ) : 
                                    this.state.contador > 0 ? 
                                    (
                                        <>
                                        <div>
                                            <h4>{experiencia.cargo}</h4>
                                            <date>{experiencia.periodo}</date>
                                            <strong>{experiencia.empresa}</strong>
                                            <span>{experiencia.local}</span>
                                        </div>    
                                        
                                        <p>{experiencia.conteudo}</p>
                                        </>
                                    ): null
                                    
                                }
                                
                                
                            </div>                                                      
                            { experiencia.atual && (
                                <div>
                                    <button onClick={() => this.setState({contador: this.state.contador + 1})}>Mostrar Atual</button>
                                </div>
                                )

                            }           
                            </>             
                        ))
                    }
                                                         
                
                           

            
   
                </div>

                </>        
        )
        
    }

}



        
        
    
        
     
