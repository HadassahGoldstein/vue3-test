<template>
    <div class="ion-padding">
        <p>
            The cost for the {{ year }} data is {{ product?.value?.price }}. This cost applies yearly and will
            expire for
            {{ year + 1 }}. Click the purchase button to be upgraded.
            product is avail {{ isAvail ? 'Yes' : 'No' }}
            product is paid {{ paid ? 'Yes' : 'No' }}
        </p>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent, watchEffect, reactive } from "vue"
import usePurchase from '../stores/purchase'

export default defineComponent({
    props: { redirect: String },
    setup() {
        const { product, paid, productAvailable } = usePurchase()

        // const productLoaded = computed(() => purchases.productAvailable?.value)
        // const productPrice= computed(() => purchases.product?.value?.price)

        // watchEffect(() => {
        //     console.log(`productLoaded computed state`, purchases.productAvailable.value);
        //     console.log(`product loaded`, purchases.product?.value?.loaded);
        //     console.log(`product valid`, purchases.product?.value?.valid);
        //     console.log(`product price`, purchases.product?.value?.price);
        // });

        return {
            year: new Date().getFullYear(),
            product,
            paid,
            isAvail: productAvailable
        }
    },
})
</script>
  