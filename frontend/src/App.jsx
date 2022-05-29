import React from 'react'
import './App.css'

//create a component
export default function App(){

   const user ={
     firstName: "John",
     lastName: "Doe"
   }

   const customStyling ={ 
     color : 'red'
   }
    /*JSX*/
    return( 
    <div className="italic">
      Hello, {user.firstName + ' ' + user.lastName }
    </div>
    )
  }