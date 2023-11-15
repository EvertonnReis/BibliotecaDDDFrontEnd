<script setup>

import Navbar from '../src/components/NavBar.Vue';
import Footer from '../src/components/Footer.Vue';

</script>

<template>
  <div>
    <Navbar />
    <!-- <div class="main">
      <router-view></router-view>
    </div> -->
    <Footer />
  </div>
</template>


<style>
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
}
</style>
