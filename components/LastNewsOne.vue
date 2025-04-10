<template>
  <div class="col-8">
    <div class="slider-s-1" id="sliders1">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
            <a :href="slide.href" :title="slide.title">
              <div class="image-wrapper image-330">
                <img class="image" :src="slide.imageSrc" :alt="slide.alt" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <ul class="s-pagination">
        <li v-for="(slide, index) in slides" :key="'pagination-' + index" :class="{ active: index === activeSlide }">
          <a :href="slide.href" :title="slide.title">
            {{ index + 1 }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const slides = ref([
  {
    href: '',
    title: "Bakan Fidan'dan Özel'e tepki... 'Sizin yaptığınız siyaset değildir'",
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/10/bakan-fidandan-ozele-tepk-161.jpg',
    alt: "Bakan Fidan'dan Özel'e tepki... 'Sizin yaptığınız siyaset değildir'",
  },
  {
    href: '',
    title: "Ticaret savaşı kızışıyor... Trump Çin'e karşı vites artırdı",
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/ticaret-savasi-kizisiyor--325.jpg',
    alt: "Ticaret savaşı kızışıyor... Trump Çin'e karşı vites artırdı",
  },
  {
    href: '',
    title: "Başkan Erdoğan'dan Özgür Özel'e 'boykot' göndermesi... 'Avuçlarını yaladılar'",
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/baskan-erdogandan-ozgur-o-829.jpg',
    alt: "Başkan Erdoğan'dan Özgür Özel'e 'boykot' göndermesi... 'Avuçlarını yaladılar'",
  },
  {
    href: '',
    title: "ABD'den antisemitizm fişlemesi... Göçmenlere dijital gözaltı",
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/abdden-antisemitizm-fisle-636.jpg',
    alt: "ABD'den antisemitizm fişlemesi... Göçmenlere dijital gözaltı",
  },
  {
    href: '',
    title: "Almanya'da hükümet düğümü çözüldü... ABD baskıları sonuç verdi",
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/almanyada-hukumet-dugumu--149.jpg',
    alt: "Almanya'da hükümet düğümü çözüldü... ABD baskıları sonuç verdi",
  },
  {
    href: '',
    title: "'Bizim arzumuz' diyerek duyurdular: Komşudan Türkiye çıkışı",
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/bizim-arzumuz-diyerek-duy-751.jpg',
    alt: "'Bizim arzumuz' diyerek duyurdular: Komşudan Türkiye çıkışı",
  },
  {
    href: '',
    title: "Bayraktar TB2'den dünyada bir ilk! İki testte büyük başarı",
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/bayraktar-tb2den-dunyada--563.jpg',
    alt: "Bayraktar TB2'den dünyada bir ilk! İki testte büyük başarı",
  },
  {
    href: '',
    title: 'Minguzzi cinayeti milat oldu... Yeni düzenleme yolda',
    imageSrc: 'https://img3.aksam.com.tr/imgsdisk/2025/04/09/minguzzi-cinayeti-milat-o-663.jpg',
    alt: 'Minguzzi cinayeti milat oldu... Yeni düzenleme yolda',
  },
]);

const activeSlide = ref(0);
</script>
