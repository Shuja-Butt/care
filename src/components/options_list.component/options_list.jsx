import './options_list.css';

import Option from '../option.component/option';
const OptionsList =({addNewUser,updateExistingUser,deleteExistingUser})=>{





    return (
        <div className='input_fields_container'>
            <Option  action={updateExistingUser} text='PUT'/>
            <Option   action={addNewUser} text='POST'/>
            <Option   action={deleteExistingUser} text='DELETE'/>
        </div>

    )

}

export default OptionsList;
