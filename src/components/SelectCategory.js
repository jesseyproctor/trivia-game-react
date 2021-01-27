function SelectCategory ({ categories, setSelectedCategory }) {
    return (
        <div>
            <h2>List of Categories</h2>
            <ul>
            {categories.map(category => (
                <li key={category.id}>
                <button
                    onClick={() => setSelectedCategory(category)}
                >
                    {category.name}
                </button>
                </li>
            ))}
            </ul>
        </div>
    )
}
    
export default SelectCategory
