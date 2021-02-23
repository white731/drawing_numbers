import { useRealtimeDrawer, useRealtimeViewer} from 'react-realtime-drawing';
import Number from './components/Number';
import NumberNavBar from './components/NumberNavBar';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Five } from './svgs/Numbers';

const App = () => {

  const [number, setNumber] = useState(Five)
  const [animate, setAnimate] = useState("hello")

  const [, { onChange }] = useRealtimeViewer();

  

  
  const [drawerRef] = useRealtimeDrawer({
    color: '#00ffaa',
    onChange
  });

  const handleReset = () => {
    let canvas = document.getElementById("myCanvas")
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    
  }

  const playAgain = () => {
    setAnimate(animate == "hello" ? true : "hello")
  }

  const switchNum = (numberComp) => {
    setNumber(numberComp)
    setAnimate(animate == "hello" ? true : "hello")
    handleReset()
    // console.log(numberComp)
    
  }

  const freeDraw = () => {
    setNumber("")
  }

  const copyPath = () => {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext('2d');
    let path1 = new Path2D();
    let p = path1.addPath(ctx)
    console.log(p)
  }


  const renderSwitchNum = () => {
    return(
    <>
     <DrawBox>
          <canvas id="myCanvas" ref={drawerRef}/>
      </DrawBox>
      <SVGBox>
        <Number number = {number} animate = {animate}/>
      </SVGBox>
     
    </>
    )
  }

return (
<Container>

  <h1 style={{textAlign:"center"}}>Learn to Write Numbers!</h1>

  <NumberNavBar newNumber = {switchNum} />
  
  <div style = {{display:"flex", flexDirection:"row", flexWrap:"wrap-reverse", justifyContent:"space-around"}}>
    <div style ={{marginTop: 20}}>
      <Button1 onClick = {handleReset}>Reset Drawing</Button1>
      <Button2 onClick = {playAgain}>Play again</Button2>
      <Button2 onClick = {freeDraw}>Free Draw</Button2>
    </div>
    
    <div style={{display:"grid", gridColumnStart:"1fr", gridRowStart:"1fr"}}>
      {renderSwitchNum()}
    </div>

    
  </div>
</Container>


)

}

export default App

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

const BigButton = styled(Button)`
width: 200px;
height: 100px;
color: white;
background-color: red;
text-align:center;
padding:10px;
margin-top: 20px;
justify-content:center;
align-self:center;
display:flex;
padding-top: 75px;
font-size: 24px;
border-radius: 15px;
`

const Button1 = styled(BigButton)`
// position: absolute;
// top: 500px;
`

const Button2 = styled(BigButton)`
// position: absolute;
// top: 200px;
`


const SVGBox = styled.div`
// border:solid;
// border-width: 3px;
// border-color:blue;
width: 500px;
height: 500px;
margin: auto;
// position: absolute;
// top: 200px;
// left: 0;
// right: 0;
text-align: center;
margin-top: 50px;
grid-row:1;
grid-column:1;
`

const DrawBox = styled.div`
border:solid;
border-width: 10px;
border-color: Red;
width: 600px;
height: 600px;
margin: auto;
// position: absolute;
// top: 20px;
// left: 0;
// right: 0;
text-align: center;
margin-top: 20px;
grid-row:1;
grid-column:1;
`

const Container = styled.div`
margin: auto 50px;
margin-top:10px;
`