import { useRealtimeDrawer, useRealtimeViewer } from 'react-realtime-drawing';
import Number from './components/Number';
import { Five } from './svgs/Numbers';
import NumberNavBar from './components/NumberNavBar';
import styled from 'styled-components';

const App = () => {

  const [, { onChange }] = useRealtimeViewer();

  const [drawerRef] = useRealtimeDrawer({
    color: '#00ffaa',
    onChange
  });

return (
<>
<NumberNavBar/>

  <SVGBox>
      <Number number = {Five}/>
  </SVGBox>

  <DrawBox>
    <canvas ref={drawerRef} style={{border:"solid", borderWidth:"3px", borderColor:"red"}}/>
  </DrawBox>

  

{/* <div style={{ width: 512, height: 512 }}>
      <canvas ref={viewerRef} />
  </div> */}
</>


)

}

export default App


const SVGBox = styled.div`
// border:solid;
// border-width: 3px;
// border-color:blue;
width: 500px;
height: 500px;
margin: auto;
position: absolute;
top: 100px;
left: 0;
right: 0;
text-align: center;
margin-top: 20px;
`

const DrawBox = styled.div`
border:solid;
border-width: 3px;
border-color: green;
width: 600px;
height: 600px;
margin: auto;
position: absolute;
top: 20px;
left: 0;
right: 0;
text-align: center;
margin-top: 20px;
`