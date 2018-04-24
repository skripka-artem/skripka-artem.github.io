

<template>
  <div>
    <label >Введите что ищете</label>  <input type="text" v-model="seach.title">
    <button type="submit" @click.prevent="addSeach" >Поиск</button>
    <button type="submit" @click.prevent="deleteSeach" >Очистить</button>
    <ul class="blockImg"><li v-for="elem in elems"> <img v-bind:src="elem.largeImageURL" alt="">
      <a v-bind:href="elem.largeImageURL" target="_blank">Смотреть</a></li>  </ul>
  </div>
</template>
<script src="./Seach.js"></script>
<style lang="scss" src="../../component/App/App.scss"> </style>
