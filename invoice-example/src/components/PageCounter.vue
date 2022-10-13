<script setup>
</script>


<template>
  <div class="page-counter">
    Page <span class="current-page" /> of <span class="total-pages" />
  </div>
</template>


<style lang="scss">
.page-counter {
  display: block;
  position: running(pageContainer);
  margin-top: -25px;
  font-size: 12px;
  text-align: right;
  color: #999;

  // This will be filled when generating the PDF
  .current-page {
    &::after {
      content: counter(page);
    }
  }

  // This will be filled when generating the PDF
  .total-pages {
    &::after {
      content: counter(pages);
    }
  }
}

</style>
