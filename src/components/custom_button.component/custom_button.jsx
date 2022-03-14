import './custom_button.css';
const CustomButton =({text,action,inputValue})=>{
    let id=11;

    return <button  onClick={()=>action(inputValue,id)}  className={`${text} customButton`}   >{text}</button>


}

export default CustomButton;