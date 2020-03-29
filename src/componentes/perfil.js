import React, {Component} from 'react';

export default class perfil extends Component {


        state = {
            post: 
               {
                 nome: 'Ana Paula Velho',
                 ocupacao: 'FrontEnd Developer',
                 resumo: '37 anos, casada e vida loca.',
                 
                }
        }
    

    render(){
        const { nome,ocupacao,resumo } = this.state.post;
        return(
            <>
                <div className="perfil">
                    <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Perfil" />
                </div>
                <div className="biografia">
                    <h1> {nome} </h1>
                    <div className="ocupacao">{ocupacao}</div>
                    <p>{resumo}</p>
                </div>
            </>
        )


        
    }

}
