<template>
  <div class="home">
    <div class="jumbotron text-center rounded-0 head mb-0" style="background:url(https://cdn.pixabay.com/index/2019/10/19/07-09-05-621_1440x480.jpg); background-size:cover;">
      <h1>Stock Images in Indian Way</h1>
      <h2>Search the library of 30k+ stock images on <strong>ImagesHunk</strong></h2>
      <br>
      <input class="form-control mx-auto search w-50" type="search" placeholder="Search" aria-label="Search">
    </div>

    <div class="ads mb-5">
      <img src="https://cdn.pixabay.com/photo/2014/10/23/16/56/sparkler-499980_960_720.jpg">
    </div>

    <div class="container-fluid">
      <div class="sub-head">
        <h3 class="text-white">Featured Images <router-link to="#" class="btn btn-small btn-primary rounded">View All</router-link></h3>
      </div>
      <carousel :autoplay="true" :nav="false" :items="5">
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?1"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?2"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?3"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?4"></router-link>
        <router-link to="#"><img class="slider-image" src="https://cdn.pixabay.com/index/2019/10/19/07-09-05-621_1440x480.jpg"></router-link>
      </carousel>
    </div>

    <div class="container-fluid mt-5">
      <div class="sub-head">
        <h3 class="text-white">Indian Culture <router-link to="#" class="btn btn-small btn-primary rounded">View All</router-link></h3>
      </div>
      <carousel :autoplay="true" :nav="false" :items="5">
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?1"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?2"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?3"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?4"></router-link>
        <router-link to="#"><img class="slider-image" src="https://cdn.pixabay.com/index/2019/10/19/07-09-05-621_1440x480.jpg"></router-link>
      </carousel>
    </div>

    <div class="ads mt-5">
      <img src="https://cdn.pixabay.com/photo/2019/10/22/17/50/mushroom-collection-4569357_960_720.jpg" width="100%">
    </div>

    <div class="container-fluid mt-5">
      <div class="sub-head">
        <h3 class="text-white">Category 1 <router-link to="#" class="btn btn-small btn-primary rounded">View All</router-link></h3>
      </div>
      <carousel :autoplay="true" :nav="false" :items="5">
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?1"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?2"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?3"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?4"></router-link>
        <router-link to="#"><img class="slider-image" src="https://cdn.pixabay.com/index/2019/10/19/07-09-05-621_1440x480.jpg"></router-link>
      </carousel>
    </div>

    <div class="container-fluid mt-5">
      <div class="sub-head">
        <h3 class="text-white">Category 2 <router-link to="#" class="btn btn-small btn-primary rounded">View All</router-link></h3>
      </div>
      <carousel :autoplay="true" :nav="false" :items="5">
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?1"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?2"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?3"></router-link>
        <router-link to="#"><img class="slider-image" src="https://placeimg.com/200/200/any?4"></router-link>
        <router-link to="#"><img class="slider-image" src="https://cdn.pixabay.com/index/2019/10/19/07-09-05-621_1440x480.jpg"></router-link>
      </carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.head{
  padding-top: 12%;
  padding-bottom: 10%;
}

.slider-image{
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.ads img{
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>