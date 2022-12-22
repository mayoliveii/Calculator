import Calculator from './components/Calculator/Calculator.tsx';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header>
      <Calculator />
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
