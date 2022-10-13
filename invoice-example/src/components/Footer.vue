<script setup>

</script>



<template>
  <footer>
    <div class="info">
      <span>hello@useanvil.com</span>| &nbsp;
      <span>555 444 6666</span> | &nbsp;
      <span>useanvil.com</span>
    </div>
    <div class="thanks">
      <img src="https://github.com/anvilco/html-pdf-invoice-template/raw/main/img/heart.png" alt="heart" />
      <span>Thank you!</span>
    </div>
  </footer>
</template>


<style lang="scss">
  footer {
    margin-top: 30px;

    .thanks {
      font-size: 1.125em;

      img {
        display: inline-block;
        position: relative;
        top: 1px;
        width: 16px;
        margin-right: 4px;
      }
    }

    .info {
      position: running(footer);
      margin-top: -25px;
      font-size: 0.75em;
      color: #ccc;

      span {
        padding: 0 5px;
        color: black;

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
</style>
