import React, { createContext } from 'react'
export const Context = createContext('core-banking')
export default class AppContext extends React.Component{
    constructor(props: any){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Context.Provider value={''}>
                {this.props.children}
            </Context.Provider>
        )
    }
}