import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import CommentContainer from '../containers/product/CommentContainer';
import ProductContainer from '../containers/product/ProductContainer';

const ProductPage = () => {
  return (
    <>
      <HeaderContainer />
      <ProductContainer />
      <CommentContainer />
      <FooterContainer />
    </>
  );
};

export default ProductPage;
