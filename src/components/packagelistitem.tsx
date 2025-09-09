
const ProductListItem = ({id, title, description, imageUrl, price}: any) => {

  return (
    <div className='basis-64'>
      <h2>{title}</h2>
        <a href={`/product/${id}`}><img className='h-25' src={imageUrl} alt={`${description} logo`} /></a>
      <h3>${price}</h3>
    </div>
  )
}

export default ProductListItem