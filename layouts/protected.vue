<script setup>
import Navbar from "/components/Navbar.vue";
import Footer from "/components/Footer.vue";
</script>

<template>
  <div>
    <header>
      <slot name="header">
        <Navbar />
      </slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">
        <Footer />
      </slot>
    </footer>
  </div>
</template>