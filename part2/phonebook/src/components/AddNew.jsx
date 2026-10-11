const AddNew = ({formSubmit, nameValue, nameOnChange, numberValue, numberOnChange, persons }) => {
    return (
        <div>
            <h2>Add new</h2>
            <form onSubmit = {formSubmit}>
                <div>
                    Name: <input value = {nameValue} onChange = {nameOnChange} />
                </div>
                <div>
                    Number: <input value = {numberValue} onChange = {numberOnChange} />
                </div>
                <button type = "submit">Add</button>
            </form>
        </div>
    )
}

export default AddNew;