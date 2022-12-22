import React, { useState } from 'react';
import { Button, Center, Box, Text, Tooltip } from '@chakra-ui/react'
export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  function inputNum(e) {
    if (num === 0) {
      setNum(e.target.value)
    } else {
      setNum(num + e.target.value);
    }
  }
  function clearInput(e) {
    setNum(0)
  }
  function porcentage(e) {
    setNum(num / 100);
  }
  function squareRoot(e) {
    setNum(Math.sqrt(num));
  }
  function operatorHandler(e) {
    setOperator(e.target.value);
    setOldNum(num);
    setNum(0);
  }
  function calculate() {
    if (operator === "÷") {
      setNum((oldNum) / (num));
    } else if (operator === "X") {
      setNum((oldNum) * (num));
    } else if (operator === "-") {
      setNum((oldNum) - (num));
    } else if (operator === "+") {
      setNum((oldNum) + (num));
    } else if (operator === "π") {
      setNum(num + Math.PI)
    }
  }
  return (
    <Center mt={'2em'} >
      <Box borderRadius={'2em'} w={'25em'} h={'41em'} bg={'#EEF3FF'} >
        <>
          <Box w={'100%'} h={'8em'} bg={'#D1D8FF'} borderTopRadius={'2em'}>
            <Text fontFamily={'monospace'} fontSize={'3em'} textAlign={'right'} px={'0.5em'} pt={'0.5em'}>{num}</Text>
          </Box>
        </>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'##EEF3FF'} onClick={squareRoot} >{'√'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'##EEF3FF'} onClick={inputNum} value={'π'}>{'π'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'##EEF3FF'} onClick={inputNum} value={'^'}>{'^'}</Button>
        <Tooltip hasArrow label={'Função ainda não implementada 😕'} bg='red.600'><Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'##EEF3FF'} onClick={operatorHandler} value={'!'}>{'!'}</Button></Tooltip>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#A7E8B5'} onClick={clearInput} >{'AC'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#92BDFF'}>{'( )'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#92BDFF'} onClick={porcentage}>{'%'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#92BDFF'} onClick={operatorHandler} value={'÷'}>{'÷'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={7}>{'7'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={8}>{'8'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={9}>{'9'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#92BDFF'} onClick={operatorHandler} value={'X'}>{'X'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={4}>{'4'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={5}>{'5'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={6}>{'6'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#92BDFF'} onClick={operatorHandler} value={'-'}>{'-'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={1}>{'1'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={2}>{'2'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={3}>{'3'}</Button>
        <Tooltip hasArrow label={'Botão com bug 🤯'} bg='green.600'><Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#92BDFF'} onClick={operatorHandler} value={'+'}>{'+'}</Button></Tooltip>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={0}>{'0'}</Button>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'} onClick={inputNum} value={','}>{','}</Button>
        <Tooltip hasArrow label={'Função ainda não implementada 😕'} bg='red.600'><Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#DDE2FF'}>{'⌦'}</Button></Tooltip>
        <Button w={'3em'} h={'3em'} fontSize={'1.5em'} borderRadius={'2em'} m={'0.3em'} bg={'#D2B7FF'} onClick={calculate}>{'='}</Button>
      </Box>
    </Center >
  )
}
