import SvgLines from 'react-mt-svg-lines';

const Number = ({number}) => {

  return (
    <SvgLines animate={ true } duration={ 5000 }>
    <svg 
        
        viewBox="500 50 400 500"
        height="500"
        width="500"
        >
        <path
        stroke="green" 
        strokeWidth="10" 
        fill="none" 
        d={number}/>
    </svg>
  </SvgLines>
  )
}

export default Number