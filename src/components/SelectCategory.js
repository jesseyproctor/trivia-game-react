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

{ /* <nav>
  <ul>
    <li>
      home
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      products
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      services
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      contact
      <span></span><span></span><span></span><span></span>
    </li>
  </ul>
</nav> */ }
