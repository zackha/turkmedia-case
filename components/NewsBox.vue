<template>
  <div class="box-news-1 margin-bottom-md">
    <div class="row">
      <div class="col-3" v-for="(item, index) in news" :key="index">
        <div class="item relative">
          <NuxtLink :to="item.url" target="_blank" :title="item.title" class="full-link">
            <div class="image-wrapper image-150">
              <img class="image" :src="item.img" :alt="item.title" />
            </div>
            <div class="text">
              <div class="category category7"></div>
              <h3 class="font-weight-7 font-size-16">{{ item.title }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: Array,
});
</script>
