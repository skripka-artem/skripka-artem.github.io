<template>
  <div>
   <Sitebar></Sitebar>
   <ul class="blockImg"><li v-for="elem  in elems"><img  v-bind:src="elem.userImageURL || '/dist/user.png'" alt="">
  
     
      <a v-bind:href="elem.pageURL" target="_blank">Смотреть видео автора {{ elem.user }} </a>
    </li>    </ul>

  </div>
</template>
<script src="./LatestVideo.js"></script>
<style lang="scss" src="../../component/App/App.scss"> </style>
