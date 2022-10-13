<script setup>
import InvoiceTable from './InvoiceTable.vue'

const props = defineProps({
  accountNumber: String,
  routingNumber: String,
  dueDate: String,
  total: String,
})
</script>

<template>
  <InvoiceTable class="totals has-bottom-border">
    <template #headings>
      <th>Payment Info</th>
      <th>Due by</th>
      <th>Total due</th>
    </template>

    <template #default>
      <tr>
        <td class="payment-info">
          <div>
            Account No: <strong>{{ accountNumber }}</strong>
          </div>
          <div>
            Routing No: <strong>{{ routingNumber }}</strong>
          </div>
        </td>

        <td>
          <span class="large">{{ dueDate }}</span>
        </td>

        <td class="total">
          <span class="large"><strong>{{ total }}</strong></span>
        </td>
      </tr>
    </template>
  </InvoiceTable>
</template>


<style lang="scss">
.totals {
  .payment-info {
    width: 38%;
    font-size: 0.75em;
    line-height: 1.5;
  }

  .large {
    font-size: 1.75em;
  }

  .total {
    color: #fb7578;
  }
}
</style>
