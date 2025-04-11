<template>
  <div class="col-4">
    <div class="slider-s-2" id="sliders2">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="0" style="width: 318px">
            <a title="Her gün 1 fincan kahve içmenin 10 faydası">
              <div class="image-wrapper image-330">
                <img class="image" src="https://img3.aksam.com.tr/imgsdisk/2025/04/09/her-gun-1-fincan-kahve-ic-925.jpg" alt="Her gün 1 fincan kahve içmenin 10 faydası" />
              </div>
            </a>
          </div>

          <div class="swiper-slide" data-swiper-slide-index="1" style="width: 318px">
            <a target="_blank" title="Mehmet Ali Erbil'in isteği yok artık dedirtti!">
              <div class="image-wrapper image-330">
                <img
                  class="image lazy"
                  src="https://img3.aksam.com.tr/imgsdisk/2025/04/09/uc-cocuk-bir-torun-sahibi-384.jpg"
                  alt="Mehmet Ali Erbil'in isteği yok artık dedirtti!" />
              </div>
            </a>
          </div>

          <div class="swiper-slide" data-swiper-slide-index="2" style="width: 318px">
            <a target="_blank" title="Kişilik testi: Resimde ilk gördüğün yüz hangisi? Cimri misin yoksa">
              <div class="image-wrapper image-330">
                <img
                  class="image lazy"
                  src="https://img3.aksam.com.tr/imgsdisk/2025/04/09/kisilik-testi-resimde-ilk-587.jpg"
                  alt="Kişilik testi: Resimde ilk gördüğün yüz hangisi? Cimri misin yoksa" />
              </div>
            </a>
          </div>

          <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="3" style="width: 318px">
            <a target="_blank" title="İbrahim Tatlıses'ten Dilan'ı kıskandıracak paylaşım">
              <div class="image-wrapper image-330">
                <img
                  class="image lazy"
                  src="https://img3.aksam.com.tr/imgsdisk/2025/04/09/ibrahim-tatlisesten-kizi--164.jpg"
                  alt="İbrahim Tatlıses'ten Dilan'ı kıskandıracak paylaşım" />
              </div>
            </a>
          </div>

          <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="4" style="width: 318px">
            <div class="image-wrapper image-330">
              <a>
                <img class="image lazy" alt="Halkbank" src="https://assets.turkmedya.com.tr/halkbank-2025-subat-2/318x330.jpg" />
              </a>
            </div>
          </div>

          <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="0" style="width: 318px">
            <a title="Her gün 1 fincan kahve içmenin 10 faydası">
              <div class="image-wrapper image-330">
                <img class="image" src="https://img3.aksam.com.tr/imgsdisk/2025/04/09/her-gun-1-fincan-kahve-ic-925.jpg" alt="Her gün 1 fincan kahve içmenin 10 faydası" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <ul class="s-pagination flex">
        <li v-for="index in 5" :key="index">
          <a :data-slide-index="index - 1" href="">{{ index }}</a>
        </li>
      </ul>
      <div class="icon icon-nav icon-left-arrow-line cursor-pointer"><Icon name="heroicons:chevron-left" class="font-size-24" /></div>
      <div class="icon icon-nav icon-right-arrow-line cursor-pointer"><Icon name="heroicons:chevron-right" class="font-size-24" /></div>
    </div>
  </div>
</template>
