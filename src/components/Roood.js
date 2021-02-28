const Roood = ({ items }) => {
    let list = items.map(item => {
        return <li>{item} - {Math.sqrt(item)}</li>
    });
    return <ul>{list}</ul>;
}
export default Roood;