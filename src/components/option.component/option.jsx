
import CustomInput from '../custom_input.component/custom_input';
import CustomButton from '../custom_button.component/custom_button';
import { useState } from 'react';
import './option.css';

const Option=({text,action})=>{

    const [input,setInput]=useState('');




   return(
        <div className='input_field'>
       <CustomInput  value={input} action={setInput}/>
       <CustomButton   action={action}  inputValue={input} text={text}/>
  </div>

   )



}

export default Option;