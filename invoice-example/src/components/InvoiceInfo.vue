<script setup>
const props = defineProps({
  invoiceNumber: String,
  invoiceDate: String,
  clientName: String,
  companyName: String,
  companyEmail: String,
  addressStreet: String,
  addressCityStateZip: String,
})
</script>


<template>
  <table class="invoice">
    <tr>
      <td class="client-name">
        {{ clientName }}
      </td>
      <td>{{ companyName }}</td>
    </tr>

    <tr>
      <td></td>
      <td>
        {{ addressStreet }}
      </td>
    </tr>

    <tr>
      <td>
        Invoice Date: <strong>{{ invoiceDate }}</strong>
      </td>
      <td>
        {{ addressCityStateZip }}
      </td>
    </tr>

    <tr>
      <td>
        Invoice No: <strong>{{ invoiceNumber }}</strong>
      </td>
      <td>
        {{ companyEmail }}
      </td>
    </tr>

  </table>
</template>


<style lang="scss">
.invoice {
  font-size: 0.875em;

  td {
    padding: 4px 0;

    .client-name {
      font-size: 1.5em;
      vertical-align: top;
    }
  }
}
</style>
