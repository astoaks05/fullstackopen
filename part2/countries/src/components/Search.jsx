const Search = ({ value, onChange }) => {
    return (
        <div>
            Find countries: 
            <input value = {value} onChange = {onChange}>
            </input>
        </div>
    )
}

export default Search;