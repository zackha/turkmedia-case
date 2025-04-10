<template>
  <div class="margin-bottom-md">
    <div class="row">
      <div class="col-8">
        <div class="slider-s-1" id="sliders1">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(news, index) in mainNews" :key="index" class="swiper-slide">
                <a :href="news.link" :title="news.title">
                  <div class="image-wrapper image-330">
                    <img class="image" :src="news.image" :alt="news.title" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ul class="s-pagination">
            <li v-for="(news, index) in mainNews" :key="index" :class="{ active: index === activeMainSlide }">
              <a :href="news.link" :title="news.title">
                {{ index + 1 }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-4">
        <div class="slider-s-2" id="sliders2">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(ad, index) in secondaryNews" :key="index" class="swiper-slide">
                <a :href="ad.link" :title="ad.title">
                  <div class="image-wrapper image-330">
                    <img class="image lazy" :src="ad.image" :alt="ad.title" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ul class="s-pagination flex">
            <li v-for="(ad, index) in secondaryNews" :key="index" :class="{ active: index === activeSecondarySlide }">
              <a :href="ad.link">{{ index + 1 }}</a>
            </li>
          </ul>
          <i class="icon icon-nav font-size-18 icon-left-arrow-line cursor-pointer"></i>
          <i class="icon icon-nav font-size-18 icon-right-arrow-line cursor-pointer"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const mainNews = ref([
  {
    title: "Bakan Fidan'dan Özel'e tepki...",
    link: 'guncel/bakan-fidandan-ozele-tepki-sizin-yaptiginiz-bu-siyaset-degildir/haber-1560507.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/10/bakan-fidandan-ozele-tepk-161.jpg',
  },
  {
    title: 'Ticaret savaşı kızışıyor...',
    link: 'ekonomi/ticaret-savasi-kizisiyor-trump-cine-karsi-vites-artirdi/haber-1560502.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/ticaret-savasi-kizisiyor--325.jpg',
  },
]);

const secondaryNews = ref([
  {
    title: 'Her gün 1 fincan kahve içmenin 10 faydası',
    link: 'mor-papatya/her-gun-1-fincan-kahve-icmenin-10-faydasi/haber-1560480.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/her-gun-1-fincan-kahve-ic-925.jpg',
  },
  {
    title: "Mehmet Ali Erbil'in isteği yok artık dedirtti!",
    link: 'venus/uc-cocuk-bir-torun-sahibi-mehmet-ali-erbilin-istegi-yok-artik-dedirtti/haber-1560479.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/uc-cocuk-bir-torun-sahibi-384.jpg',
  },
]);

const activeMainSlide = ref(0);
const activeSecondarySlide = ref(0);
</script>
