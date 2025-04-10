<template>
  <div class="last-news margin-bottom-md flex middle" id="lastnews">
    <div class="swiper-container width-full">
      <ul class="swiper-wrapper">
        <li v-for="(item, index) in newsItems" :key="index" class="swiper-slide">
          <a class="flex center" :href="item.href">
            <div class="time font-size-12 margin-right-sm">{{ item.time }}</div>
            <h3 class="title">{{ item.title }}</h3>
          </a>
        </li>
      </ul>
    </div>
    <div class="navigation flex middle mlm">
      <Icon name="heroicons:chevron-left-solid" class="icon cursor-pointer icon-left-arrow-line font-size-18" />
      <Icon name="heroicons:chevron-right-solid" class="icon cursor-pointer icon-right-arrow-line font-size-18 margin-right-sm" />
      <a class="f14" href="#">Tümü</a>
    </div>
  </div>
</template>

<script setup>
const newsItems = [
  { time: '01:45', title: "Çimsa ÇBK Mersin, Avrupa Ligi'nde yarı finalde", href: '#' },
  { time: '01:43', title: 'Resmi Gazete yayımlandı... Cumhurbaşkanlığı Politika Kurullarına atama kararı', href: '#' },
  { time: '01:06', title: 'Şampiyon Ziraat Bankkart', href: '#' },
  { time: '01:04', title: 'Kuru sıkıkan!', href: '#' },
  { time: '01:03', title: "Osimhen isterse 40'a biter", href: '#' },
  { time: '01:01', title: 'En kritik maçımız Samsun', href: '#' },
  { time: '00:44', title: "Jovic'e baba engeli", href: '#' },
  { time: '00:42', title: 'Şenol Güneş beni hiç dinlemedi', href: '#' },
  { time: '00:38', title: "Mourinho Fener'de kaldı", href: '#' },
  { time: '00:37', title: "Ümraniye'de minibüslerden Gazze'ye destek... Kazanç Filistin'e bağışlanacak", href: '#' },
];
</script>
