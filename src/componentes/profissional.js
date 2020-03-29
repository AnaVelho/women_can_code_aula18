import React, {Component} from 'react';

export default class profissional extends Component {


    state = {
        post:
            {
                perfilProfissional: 'Faço miojo do bom'
            }
    }

render(){
    const {perfilProfissional} = this.state.post;
    return(
         <>
            <div className="titulo">
            Perfil <br /> Profissional
             </div>
              <div className="perfil-profissional">
            <p>{perfilProfissional}</p>
             </div>    
         </>        


    )
}


    
}