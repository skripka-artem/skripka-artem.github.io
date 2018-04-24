

<template>
  <div>
    <h1>Добро пожаловать на сайт <span>wolf picture</span></h1>
    <p>На сайте ты найдешь много интересного</p>
    <p>Выбирай на какой ты стороне</p>
    <div class="varCont">
      <div>
        <router-link to="/picture" ><img src="../../assets/picture.jpg" class="" alt=""></router-link>
        <router-link to="/picture" class="link" >Картинки</router-link>
      </div>
      <div>
        <router-link to="/video" ><img src="../../assets/video.jpg" class="" alt=""></router-link>
        <router-link to="/video" class="link" >Видео</router-link>

        </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Home.scss">
</style>
