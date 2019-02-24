Vue.component('product', {
  props: {
    premium: {
      type: Boolean, 
      required: true
    }
  },
  template: `
   <div class="product">

      <div class="product-image">
        <!-- 
          you can remove v-bind and just
          use :src, :alt, etc to refer to
          the data object in the Vue instance
        -->
        <img :src="image" alt="green vue mastery socks">
      </div>

      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else> Out of Stock</p>
        <p>Shipping: {{ shipping }} </p>
        
        <product-details :details="details"></product-details>

        <div 
          class="color-box"
          v-for="(variant, index) in variants" 
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
        >
        </div>

        <button 
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Add to Cart
        </button>

        <div class="cart">
          <p>Cart({{ cart }})</p>
        </div>

      </div>
    </div>
  `,
  data() {
    return { 
      brand: 'Vue Mastery',
      cart: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      product: 'Socks',
      selectedVariant: 0,
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './vmSocks-blue-onWhite.jpg',
          variantQuantity: 0
        }
      ],
    }
  }, 
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if(this.premium) {
        return"Free";
      }
      return 2.99;
    }
  }
});

Vue.component('product-details', {
  props: {
    details: {
      type: Array, 
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">
        {{ detail }}
      </li>
    </ul>
  `
});

let app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
});