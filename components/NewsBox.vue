<template>
  <div v-for="(news, index) in newsList" :key="index" class="col-3">
    <div class="item relative">
      <a class="full-link" :href="news.link" :title="news.title" target="_blank"></a>

      <div class="image-wrapper image-150">
        <img class="image" :src="news.image" :alt="news.title" />
      </div>
      <div class="text">
        <div class="category category7"></div>
        <h3 class="font-weight-7 font-size-16">{{ news.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const newsList = [
  {
    title: "ABD Yemen'e 4 hava saldırısı daha düzenledi",
    link: 'dunya/abd-yemene-4-hava-saldirisi-daha-duzenledi/haber-1560531.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/10/t20_abd-yemene-4-hava-saldiri-890.jpg',
  },
  {
    title: "Fransa'dan vatandaşlarına 'İran'a gitmeyin' uyarısı",
    link: 'dunya/fransadan-vatandaslarina-irana-gitmeyin-uyarisi/haber-1560527.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/t20_fransadan-vatandaslarina--909.jpg',
  },
  {
    title: "Çanakkale'de bir köy daha karantinaya alındı",
    link: 'guncel/canakkalede-bir-koy-daha-karantinaya-alindi/haber-1560497.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/t20_canakkalede-bir-koy-daha--126.jpg',
  },
  {
    title: 'Dışişleri Bakanı Fidan, Şilili mevkidaşı ile görüştü',
    link: 'guncel/disisleri-bakani-fidan-silili-mevkidasi-ile-gorustu/haber-1560489.html',
    image: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/t20_disisleri-bakani-fidan-si-360.jpg',
  },
];
</script>
