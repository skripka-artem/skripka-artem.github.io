

<template>
  <div>
    <ul class="blockImg"><li v-for="elem in elems"> <img v-bind:src="elem.largeImageURL" alt="">
      <a v-bind:href="elem.largeImageURL" target="_blank">Смотреть</a></li>  </ul>
  </div>
</template>
<script src="./Popular.js"></script>
<style lang="scss" src="../../component/App/App.scss"> </style>
