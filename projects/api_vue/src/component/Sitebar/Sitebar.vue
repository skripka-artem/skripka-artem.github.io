
<template>
  <div class="sitebar">
    <h2>Категории</h2>
    <ul>
      <li><router-link to="/picture" >Картинки</router-link>
      <ul>
        <li><router-link to="/picture/popular" >Популярние</router-link></li>
        <li><router-link to="/picture/latest" >Последние</router-link></li>
      </ul>
      </li>
      <li> <router-link to="/video" >Видео</router-link>
        <ul>
          <li><router-link to="/video/popular" >Популярние</router-link></li>
          <li><router-link to="/video/latest" >Последние</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" src="./Sitebar.scss">

</style>
