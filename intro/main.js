let app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
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
   cart: 0
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
    sale() {
      if(this.onSale) {
        return this.brand + ' ' + this.product + ' is on sale!'
      } else {
        return this.brand + ' ' + this.product + ' isn\'t on sale!'
      }
    }
  }

});