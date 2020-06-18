import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postProduct } from '../../actions/store';

const SellForm = ({ history, postProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    description: '',
    price: '',
  });

  const { name, img, description, price } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    postProduct(formData, history);
  };

  return (
    <section className="section keyboard-form">
      <div style={{ marginTop: '5rem' }} className="form-container">
        <form onSubmit={(e) => onSubmit(e)}>
          <p className="subtitle is-5">Keyboard Info</p>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                className="input"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                type="text"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Product Image URL</label>
            <div className="control">
              <input
                className="input"
                name="img"
                value={img}
                onChange={(e) => onChange(e)}
                type="text"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                name="description"
                value={description}
                onChange={(e) => onChange(e)}
                type="text"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input"
                name="price"
                value={price}
                onChange={(e) => onChange(e)}
                type="number"
              />
            </div>
          </div>
          <button className="button is-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

SellForm.propTypes = {
  postProduct: PropTypes.func.isRequired,
};

export default connect(null, { postProduct })(SellForm);
