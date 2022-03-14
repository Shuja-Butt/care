import './card.css';


const Card =({data})=>{
    console.log(data)


    return (
        
   
           <div className='card_container'>
            <div style={{ backgroundImage: `url(https://robohash.org/${data.id})` }}  className='card_container_image'>
            </div>
            <div className='card_container_data'>
                <p>{data.name}</p>
                <p>{data.id}</p>
            </div>
            </div>
        
    )

}


export default  Card;