// import { useState } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react'
import Person from './types/person'
import Profile from './components/Profile/Profile'


// Componente padre di tutti gli altri
// Contiene l'intera applicazione React
function App() {
  // const [counter, setCounter] = useState<number>(0);


  // const handleClick = () => {
  //   setCounter(counter+1);
  //   console.log(counter);
  // }

  const person : Person = {
    name: "Manuel",
    image: "./logo.svg"
  }

  return (
    <ChakraProvider>
      <Box bg={"green"}>
        <Profile person={person}/>
      </Box>
    </ChakraProvider>
  );
}

// Esporto il componente default App
export default App;
