const Table = ({ items }) => {
    let list = items.map(item => {
        return <tr><td>{item.name}</td><td>{item.wealth}</td></tr>;
    });

    return <table>{list}</table>
}

export default Table;