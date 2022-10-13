<script setup>
import Footer from './components/Footer.vue'
import Logo from './components/Logo.vue'
import InvoiceInfo from './components/InvoiceInfo.vue'
import LineItems from './components/LineItems.vue'
import Totals from './components/Totals.vue'
import PageCounter from './components/PageCounter.vue'

const lineItems = [
  {
    quantity: '2',
    description: 'Blue large widgets',
    price: '$15.00',
    subtotal: '$30.00',
  },
  {
    quantity: '4',
    description: 'Green medium widgets',
    price: '$10.00',
    subtotal: '$40.00',
  },
  {
    quantity: '5',
    description: 'Red small widgets with logo',
    price: '$7.00',
    subtotal: '$35.00',
  },
]
</script>

<template>
  <div class="container">
    <PageCounter/>
    <Logo/>
    <InvoiceInfo
        invoice-number="12345"
        invoice-date="May 24th, 2024"
        client-name="Client Name"
        company-name="Anvil Co"
        company-email="hello@useanvil.com"
        address-street="123 Main Street"
        address-city-state-zip="San Francisco CA, 94103"
    />

    <LineItems :items="lineItems"/>

    <Totals
        account-number="123567744"
        routing-number="120000547"
        due-date="May 30th, 2024"
        total="$105.00"
    />

    <Footer/>
  </div>
</template>

<style lang="scss">
body {
  font-size: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table tr td {
  padding: 0;
}

table tr td:last-child {
  text-align: right;
}

// Unlike the React version of this invoice example, any `@page`, `@media`,
// or other @-rules must be at the top-level component -- and cannot be within
// child components.
@page {
  // The `content` here references `position` from the FooterContainer
  // This keeps the footer at the bottom of the page when being rendered
  // in the PDF.
  @bottom-left {
    content: element(footer);
  }

  // The `content` here references `position` from the PageCounterContainer
  @bottom-right {
    content: element(pageContainer);
  }
}

</style>
