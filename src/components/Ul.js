const Ul = ({items}) => {
    let list= items.map(item =>{
        return <li>{item.name}-{item.wealth}</li>
     })
      return <ul type="Ul">{list}</ul>;
 }
 export default Ul;