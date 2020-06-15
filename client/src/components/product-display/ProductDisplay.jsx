import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../search/SearchBar';

const ProductDisplay = ({ title, titleColor }) => {
  return (
    <section class="section">
      <SearchBar title={title} titleColor={titleColor} />
      <div class="shop">
        <div class="card shop-card">
          <div class="card-image">
            <figure class="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div class="content">
              <p class="is-size-5 price">$99</p>
              <button class="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>

        <div class="card shop-card">
          <div class="card-image">
            <figure class="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div class="content">
              <p class="is-size-5">$99</p>
            </div>
            <button class="button is-info is-rounded">Add To Cart</button>
          </div>
        </div>
        <div class="card shop-card">
          <div class="card-image">
            <figure class="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div class="content">
              <p class="is-size-5">$99</p>
              <button class="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>
        <div class="card shop-card">
          <div class="card-image">
            <figure class="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div class="content">
              <p class="is-size-5">$99</p>
              <button class="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>
        <div class="card shop-card">
          <div class="card-image">
            <figure class="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div class="content">
              <p class="is-size-5">$99</p>
              <button class="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDisplay.propTypes = {};

export default ProductDisplay;
