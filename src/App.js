
import SvgLines from 'react-mt-svg-lines'; 
import { useRealtimeDrawer, useRealtimeViewer } from 'react-realtime-drawing';

const NumberAnimate = () => {

  const [, { onChange }] = useRealtimeViewer();

  const [drawerRef] = useRealtimeDrawer({
    color: '#00ffaa',
    onChange
  });

return (
<>
<div className = "container-row">
  <div className = "layer1" style={{ width: "100%", height: 512, margin: "auto", position:"absolute"}}>
    <canvas ref={drawerRef}/>
  </div>

  <div className = "layer2" >
    <SvgLines animate={ true } duration={ 5000 }>
      <svg viewBox="0 0 1366 768">
        <path 
        stroke="green" 
        strokeWidth="10" 
        fill="none" 
        d="M591.31,116.66c-12.58-1.51-25.16,2.3-35.72,9.08c-11.13,7.15-19.77,17.32-26.17,28.81
          c-6.76,12.13-11.11,25.44-14.72,38.79c-3.98,14.69-7.37,29.56-10.3,44.5c-5.98,30.45-9.91,61.3-11.78,92.27
          c-1.86,30.95-1.64,62.03,0.67,92.95c0.58,7.7,1.28,15.39,2.12,23.07c0.67,6.16,0.9,13.02,3.97,18.57
          c3.08,5.57,8.77,7.53,14.78,8.15c7.69,0.79,15.48,0.98,23.2,1.37c32.27,1.63,64.59,2.36,96.9,2.19c8.05-0.04,16.1-0.14,24.14-0.29
          c4.14-0.08,8.28-0.17,12.42-0.28c3.48-0.09,7.02-0.07,10.45-0.75c13.84-2.76,15.08-19.42,16.6-30.78
          c2.03-15.22,2.95-31.04,1.4-46.36c-0.68-6.77-2.25-13.53-5.97-19.32c-2.96-4.59-6.99-8.36-11.54-11.35
          c-9.71-6.38-21.33-9.36-32.54-11.85c-15.57-3.46-31.16-6.84-46.73-10.27c-15.75-3.46-31.5-6.95-47.26-10.38
          c-14.61-3.18-29.55-6.15-44.58-5.53c-7.08,0.29-14.1,1.43-20.84,3.63c-1.83,0.6-1.04,3.5,0.8,2.89"/>
      </svg>
    </SvgLines>
  </div>
  
</div>

{/* <div style={{ width: 512, height: 512 }}>
      <canvas ref={viewerRef} />
  </div> */}
</>


)

}

export default NumberAnimate