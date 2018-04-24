<template>
  <div>
    <ul class="blockImg"><li v-for="elem  in elems"><img  v-bind:src="elem.userImageURL || '/dist/user.png'" alt="">
      <a v-bind:href="elem.pageURL" target="_blank">Смотреть</a>


    </li>    </ul>

  </div>
</template>
<script src="./PopularVideo.js"></script>
<style lang="scss" src="../../component/App/App.scss"> </style>
