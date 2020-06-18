import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../search/SearchBar';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/store';
import ProductItem from './ProductItem';

const ProductDisplay = ({
  title,
  titleColor,
  fetchProduct,
  productType = '',
  store: { keyboards, loading },
}) => {
  useEffect(() => {
    fetchProduct(productType);
  }, [productType]);

  return (
    <section className="section">
      <SearchBar title={title} titleColor={titleColor} />
      <div className="shop">
        {!loading && keyboards.length > 0
          ? keyboards.map((keyboard) => (
              <ProductItem key={keyboard._id} keyboard={keyboard} />
            ))
          : null}
      </div>
    </section>
  );
};

ProductDisplay.propTypes = {
  store: PropTypes.object.isRequired,
  fetchProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  store: state.store,
});

export default connect(mapStateToProps, { fetchProduct })(ProductDisplay);
