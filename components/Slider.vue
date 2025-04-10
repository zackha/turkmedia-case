<template>
  <div :class="`slider-s-${sliderId === 'sliders1' ? 1 : 2}`" :id="sliderId">
    <div class="swiper-container swiper-container-horizontal">
      <div class="swiper-wrapper" :style="wrapperStyle">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="[
            'swiper-slide',
            { 'swiper-slide-prev': index === activeIndex - 1 },
            { 'swiper-slide-active': index === activeIndex },
            { 'swiper-slide-next': index === activeIndex + 1 },
          ]"
          :style="{ width: sliderId === 'sliders1' ? '648px' : '318px' }">
          <NuxtLink :to="slide.url" target="_blank" :title="slide.title">
            <div :class="`image-wrapper image-${sliderId === 'sliders1' ? '330' : '330'}`">
              <img class="image" :src="slide.img" :alt="slide.title" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <ul class="s-pagination" :class="{ flex: sliderId === 'sliders2' }">
      <li v-for="(slide, index) in slides" :key="index" :class="{ active: index === activeIndex }">
        <NuxtLink :to="slide.url" target="_blank" :title="slide.title">
          {{ index + 1 }}
        </NuxtLink>
      </li>
    </ul>
    <i v-if="sliderId === 'sliders2'" class="icon icon-nav font-size-18 icon-left-arrow-line cursor-pointer" @click="prevSlide"></i>
    <i v-if="sliderId === 'sliders2'" class="icon icon-nav font-size-18 icon-right-arrow-line cursor-pointer" @click="nextSlide"></i>
  </div>
</template>

<script setup>
defineProps({
  slides: Array,
  sliderId: String,
});

const activeIndex = ref(0); // Aktif slayt indeksi
const slideWidth = computed(() => (props.sliderId === 'sliders1' ? 648 : 318)); // Slayt genişliği

// Swiper-wrapper'ın transform stilini hesapla
const wrapperStyle = computed(() => {
  const translateX = -activeIndex.value * slideWidth.value;
  return `transform: translate3d(${translateX}px, 0px, 0px); transition-duration: 300ms;`;
});

// Önceki ve sonraki slayt fonksiyonları
const prevSlide = () => {
  if (activeIndex.value > 0) activeIndex.value--;
};
const nextSlide = () => {
  if (activeIndex.value < props.slides.length - 1) activeIndex.value++;
};
</script>

<style scoped>
.swiper-container {
  overflow: hidden;
  position: relative;
}
.swiper-wrapper {
  display: flex;
}
.swiper-slide {
  flex-shrink: 0;
}
.image-wrapper.image-330 {
  width: 100%;
  height: 330px;
  overflow: hidden;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.s-pagination {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}
.s-pagination li {
  display: inline-block;
  margin-right: 5px;
}
.s-pagination li.active a {
  font-weight: bold;
  color: #000;
}
.icon-nav {
  cursor: pointer;
  margin-left: 10px;
}
</style>
