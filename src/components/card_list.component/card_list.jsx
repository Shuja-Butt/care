
// import {data} from '../../data';
import Card from '../card.component/card';
import './card_list.css';

const CardList =({data})=>{
    console.log(data)

    return (
        <div className='card_list_container'>

 {     data.map(user=>{

        return <Card  data={user} key={`${Math.random()*1000}`} />
      })}
      </div>

    )



}

export default CardList;