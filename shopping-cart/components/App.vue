<template>
	<div id="app">
		<h1>Shopping Cart Example</h1>
		<hr>
		<h2>Products</h2>
		<product-list></product-list>
		<hr>
		<cart></cart>
	</div>
</template>

<script>
	import ProductList from './ProductList.vue'
	import Cart from './Cart.vue'
	// import { mapGetters } from 'vuex'
	// let a = console.log({
	// 	...mapGetters({
	// 	      products: 'cartProducts',
	// 	      checkoutStatus: 'checkoutStatus'
	// 	    })
	// })

	export default {
		components:{ProductList,
			Cart
		}
	}
</script>