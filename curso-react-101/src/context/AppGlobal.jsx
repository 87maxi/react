  
import { createContext, useEffect, useState  } from 'react';  


 export const GlobalContext = createContext()
 



  // esto esta feo
 const AppGlobal = ({children}) => {
  
  const [ estado, setEstado ] = useState({
    usuario: 'user1',
  })

  useEffect(() =>{
    console.log("padre")
  })

  return ( <GlobalContext.Provider value={[ estado, setEstado ]}>
    {children}
  </GlobalContext.Provider>
  );
  
};
 // esto esta feo 


 export default AppGlobal



 