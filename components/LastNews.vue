<template>
  <div class="last-news margin-bottom-md flex middle" id="lastnews">
    <div class="swiper-container width-full swiper-container-horizontal">
      <ul class="swiper-wrapper" :style="wrapperStyle">
        <li v-for="(item, index) in news" :key="index" class="swiper-slide" style="margin-right: 16px">
          <NuxtLink class="flex center" :to="item.url" target="_blank">
            <div class="time font-size-12 margin-right-sm">{{ item.time }}</div>
            <h3 class="title">{{ item.title }}</h3>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navigation flex middle mlm">
      <i class="icon font-size-18 icon-left-arrow-line cursor-pointer" @click="prevSlide"></i>
      <i class="icon font-size-18 icon-right-arrow-line cursor-pointer margin-right-sm" @click="nextSlide"></i>
      <NuxtLink class="f14" to="/son-dakika" alt="Son Dakika Haberleri">Tümü</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: Array,
});

const activeIndex = ref(0);
const slideWidth = 300; // Sabit bir genişlik, orijinal kodda dinamik hesaplanmıyor

const wrapperStyle = computed(() => {
  const translateX = -activeIndex.value * (slideWidth + 16); // 16px margin-right için
  return `transform: translate3d(${translateX}px, 0px, 0px); transition-duration: 300ms;`;
});

const prevSlide = () => {
  if (activeIndex.value > 0) activeIndex.value--;
};
const nextSlide = () => {
  if (activeIndex.value < props.news.length - 3) activeIndex.value++; // 3 slayt göründüğünü varsayıyorum
};
</script>

<style scoped>
.swiper-container {
  overflow: hidden;
}
.swiper-wrapper {
  display: flex;
}
.swiper-slide {
  flex-shrink: 0;
  width: 300px; /* Sabit genişlik */
}
</style>
