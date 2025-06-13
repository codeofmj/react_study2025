import React from 'react'
import { useSearchParams } from 'react-router'

const ProductDetail2 = () => {

  const [query, setQuery] = useSearchParams();

  return (
    <div>
        <h1>ProductDetail2</h1>
        <h4>{query.get("pro_no")}번째 {query.get("cate")}상품입니다.</h4>
    </div>
  )
}

export default ProductDetail2