import React from 'react'

interface Props {
    params: {slug: string};
    searchParams: {sortorder: string};
}

const ProductPage = ({ params: { slug }, searchParams: { sortorder } }: Props) => {
    return (
      <div>
        ProductPage {slug} {sortorder}
      </div>
    );
  };
  
  export default ProductPage;
  
