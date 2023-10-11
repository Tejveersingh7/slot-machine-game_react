import React from 'react'
import './App.css'

const Plays = (props) => {
    let {x,y,z} = props
    if(x===y && y===z){
        return (
            <>
                <div>
                    CONGRATULATIONS :- {x} {y} {z} 
                </div>
            </>
        )
    }else{
        return (
            <>
                <div>
                    BETTER LUCK NEXT TIME:- {x} {y} {z}
                </div>
            </>
        )    
    }
}

export default Plays;