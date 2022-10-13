<script setup>
import InvoiceTable from './InvoiceTable.vue'

const props = defineProps({
  items: Array
})
</script>


<template>
  <InvoiceTable class="line-items">
    <template #headings>
      <th class="qty">Quantity</th>
      <th>Description</th>
      <th class="price">Price</th>
      <th class="subtotal">Subtotal</th>
    </template>

    <template #default>
      <tr v-for="(item, idx) in items" :key="item.description + idx">
        <td>{{ item.quantity }}</td>
        <td>{{ item.description }}</td>
        <td class="right-align-cell">{{ item.price }}</td>
        <td><strong>{{ item.subtotal }}</strong></td>
      </tr>

    </template>
  </InvoiceTable>

</template>


<style lang="scss">
.line-items {
  .qty {
    width: 50px;
  }

  .price {
    text-align: right;
    width: 100px;
  }

  .subtotal {
    width: 100px;
  }

  .right-align-cell {
    text-align: right;
  }

}
</style>
