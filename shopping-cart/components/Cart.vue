<template>
	<div class="cart">
		<h2>Your Cart</h2>
		<p v-show="!products.length">
			<i>Please add some products to cart.</i>
		</p>
		<ul>
			<li v-for="p in products">
				{{p.title}} - {{p.price | currency}} X {{p.quantity}}
			</li>
		</ul>
		<p>Total:{{total | currency}}</p>
		<p>
			<button 
				:disabled="!products.length"
				@click="checkout(products)">
					Checkout
				</button>
		</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	// let a = console.log({
	// 	...mapGetters({
	// 	      products: 'cartProducts',
	// 	      checkoutStatus: 'checkoutStatus'
	// 	    })
	// })

	export default {
		computed:{
			...mapGetters({
		      products: 'cartProducts',
		      checkoutStatus: 'checkoutStatus'
		    }),
			total(){
				return this.products.reduce((total,p) => {
					return total + p.price * p.quantity
				},0)
			}
		},
		methods:{
			checkout(products){
				this.$store.dispatch('checkout',products)
			}
		}	
	}
</script>