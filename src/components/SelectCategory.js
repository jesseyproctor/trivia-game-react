function SelectCategory ({ categories, setSelectedCategory }) {
  return (
    <div>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <button
                className='categoryButton'
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
                <span /><span /><span /><span />
              </button>

            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SelectCategory
