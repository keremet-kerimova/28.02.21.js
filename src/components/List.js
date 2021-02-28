const List =(props)=> {
     let list = []
        for(let i = 0; i < props.items.lenght; i++){
            let item = props.items[i];
            list.push(<li>{item}</li>);
        }
      return <ul>
        {list}
      </ul>;
}
export default List