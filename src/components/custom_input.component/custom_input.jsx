
import './custom_input.css';

const CustomInput =({action,value})=>{

    return <input  value ={value} onChange={(e)=>action(e.target.value)} className="custom-input" type='text'/>

}


export default CustomInput;