<script setup>
const isDropdownOpen = ref(false);
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

const logos = reactive([
  {
    href: '',
    src: 'https://img3.aksam.com.tr/folders/logolar/acikgorus-logo.png',
    alt: 'Açık Görüş Haberleri',
    title: 'Açık Görüş Haberleri',
    width: 123,
    height: 24,
    style: 'width: 123px; height: 24px; margin-top: 0px',
  },
  {
    href: '',
    src: 'https://www.aksam.com.tr/venus/venuslogo.png',
    alt: 'Venüs - Magazin Haberleri',
    title: 'Venüs - Magazin Haberleri',
    width: 233,
    height: 81,
    style: 'width: 100px; height: auto; display: block',
  },
  {
    href: '',
    src: 'https://img3.aksam.com.tr/folders/logolar/morpapatya-logo.png',
    alt: 'Mor Papatya Haberleri',
    title: 'Mor Papatya Haberleri',
    width: 109,
    height: 40,
    style: 'width: 109px; height: 40px; margin-top: 0px',
  },
  {
    href: '',
    src: 'https://img3.aksam.com.tr/folders/logolar/aksamtv-logo.png',
    alt: 'Akşam TV',
    title: 'Akşam TV',
    width: 120,
    height: 17,
    style: 'width: 120px; height: 17px; margin-top: 0px',
  },
  {
    href: '',
    src: 'https://img3.aksam.com.tr/folders/logolar/sporlogo24.png',
    alt: 'Spor Haberleri',
    title: 'Spor Haberleri',
    width: 80,
    height: 24,
    style: 'width: 80px; height: 24px; margin-top: 0px',
  },
  {
    href: '',
    src: 'https://img3.aksam.com.tr/folders/logolar/canliyayin-logo.png',
    alt: 'Canlı Yayın',
    title: 'Canlı Yayın',
    width: 62,
    height: 22,
    style: 'width: 62px; height: 22px; margin-top: 0px',
  },
]);

const menus = reactive([
  { text: 'SON DAKİKA', href: '' },
  { text: 'SPOR', href: '' },
  { text: 'SİYASET', href: '' },
  { text: 'EKONOMİ', href: '' },
  { text: 'HABER ÖZETLERİ', href: '' },
  { text: 'YAZARLAR', href: '' },
  { text: 'SEYAHAT', href: '' },
  { text: 'RESMİ İLANLAR', href: '' },
]);

const submenus = reactive([
  { text: 'Foto Galeri', href: '' },
  { text: 'Video Galeri', href: '' },
  // Add other submenu items here...
]);

const currencies = reactive([
  { type: 'USD', symbol: '$', value: '37,9857', trend: 'down', icon: 'icon-down-arrow' },
  { type: 'EUR', symbol: '€', value: '41,8182', trend: 'up', icon: 'icon-up-arrow' },
]);

const socialLinks = reactive([
  { platform: 'Facebook', href: 'https://www.facebook.com/Aksam/', icon: 'icon-facebook' },
  { platform: 'Twitter', href: 'https://twitter.com/aksam', icon: 'icon-twitter' },
  { platform: 'YouTube', href: 'https://www.youtube.com/user/aksamgazetesi/?sub_confirmation=1', icon: 'icon-youtube' },
  // Add other social links here...
]);
</script>

<template>
  <div class="header-main margin-bottom-sm margin-top-sm">
    <div class="container flex middle">
      <div class="left">
        <h1>
          <a href="">
            <img src="https://img3.aksam.com.tr/folders/logolar/aksam-logo.svg" alt="Haberler" width="180" height="45" />
          </a>
        </h1>
      </div>
      <div class="right width-full">
        <ul class="logo-area flex middle between">
          <li v-for="logo in logos" :key="logo.alt">
            <a href="">
              <img :src="logo.src" :alt="logo.alt" :width="logo.width" :height="logo.height" :style="logo.style" />
            </a>
          </li>
        </ul>
        <ul class="menu-area flex middle between width-full font-weight-7">
          <li v-for="menu in menus" :key="menu.text">
            <a href="">{{ menu.text }}</a>
          </li>
          <li class="drop-select cursor-pointer" :class="{ active: isDropdownOpen }">
            <span class="flex middle dropdown-toggle" @click="toggleDropdown">
              <span class="margin-right-sm">MENÜ</span>
              <i class="icon icon-menu font-size-11"></i>
            </span>
            <ul class="drop-content font-size-12">
              <li v-for="submenu in submenus" :key="submenu.text">
                <a href="#">{{ submenu.text }}</a>
              </li>
            </ul>
          </li>
          <li class="flex middle">
            <div class="drop-select search">
              <i class="icon cursor-pointer icon-search font-size-17 block"></i>
              <div class="drop-content padding-md">
                <form class="searchform">
                  <input type="text" placeholder="Arama" />
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="header-sub margin-bottom-md">
    <div class="container">
      <div class="wrapper flex between middle">
        <div class="flex middle">
          <div class="weather-area mrl" style="display: none">
            <a class="flex middle relative">
              <div class="image margin-right-sm"></div>
              <div class="degree margin-right-sm">
                <span class="number"></span>
                °C
              </div>
              <select class="city-select cursor-pointer">
                <option selected>İstanbul</option>
              </select>
              <i class="icon icon-angle-down margin-left-sm"></i>
            </a>
          </div>
        </div>
        <div class="flex middle">
          <div class="currency-area margin-right-md">
            <ul class="flex fc center">
              <li v-for="currency in currencies" :key="currency.type" :class="currency.trend" class="flex middle">
                <span class="currency-icon margin-right-sm">{{ currency.symbol }}</span>
                <span class="margin-right-sm">{{ currency.value }}</span>
                <i :class="currency.icon"></i>
              </li>
            </ul>
          </div>
          <ul class="other-links flex middle">
            <li v-for="social in socialLinks" :key="social.platform">
              <a class="flex middle">
                <i :class="social.icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
