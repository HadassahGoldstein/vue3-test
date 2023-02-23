import { computed, onMounted, reactive, toRef, toRefs } from 'vue'

const PurchaseStore = () => {
    const state = reactive({
        product: {
            loaded: false,
            valid: false,
            price: '$6.99'
        } as any,
        paid: false,
    })

    const productAvailable = computed(() => Boolean(state.product?.loaded && state.product?.valid))
    const productIsOwned = computed(() => Boolean(state.product?.owned) || state.paid)
    const productPrice = computed(() => state.product?.price)

    onMounted(async () => {
        setTimeout(() => {
            state.product.loaded = true
            state.product.valid = true
            state.product.price = '$10.99'
        }, 3000)
    })

    return {
        productAvailable,
        productIsOwned,
        productPrice,
        ...toRefs(state)
    }
}

export default PurchaseStore
