import { Five, Six, One, Two, Three, Four, Seven, Eight, Nine, Zero } from "../svgs/Numbers"
import styled from "styled-components"

const NumberNavBar = ({newNumber}) => {



  return (
  <div style = {{display:"flex", alignContent:"center", justifyContent:"space-between"}}>
    <NumberButton 
      onClick = {() =>{newNumber(One)}}>
      <h2>1</h2>
    </NumberButton>
    <NumberButton 
      onClick = {() =>{newNumber(Two)}}>
      <h2>2</h2>
    </NumberButton>
    <NumberButton 
      onClick = {() =>{newNumber(Three)}}>
      <h2>3</h2>
    </NumberButton>
    <NumberButton 
      onClick = {() =>{newNumber(Four)}}>
      <h2>4</h2>
    </NumberButton>
    <NumberButton 
      onClick = {() =>{newNumber(Five)}}>
      <h2>5</h2>
    </NumberButton>
    <NumberButton
      onClick = {() =>{newNumber(Six)}}>
      <h2>6</h2>
    </NumberButton>
    <NumberButton
      onClick = {() =>{newNumber(Seven)}}>
      <h2>7</h2>
    </NumberButton>
    <NumberButton
      onClick = {() =>{newNumber(Eight)}}>
      <h2>8</h2>
    </NumberButton>
    <NumberButton
      onClick = {() =>{newNumber(Nine)}}>
      <h2>9</h2>
    </NumberButton>
    <NumberButton
      onClick = {() =>{newNumber(Zero)}}>
      <h2>10</h2>
    </NumberButton>
  </div>
  )
}

export default NumberNavBar

export const Button = styled.div`

cursor: pointer;
box-shadow: 0px 8px 15px grey;
transition: all 0.3s ease 0s;
&:hover{
  color: black;
  background-color: pink;
  box-shadow: 0px 15px 20px grey;
  transform: translateY(-7px);
}
`

const NumberButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 80px;
  height:50px;
  border: solid 2px pink;
  background-color: red;
  color: white;
  border-radius: 8px;
`