<script setup>
const recentNewsCard = [
  {
    id: 1,
    link: "#",
    image: "recentnews1.png",
    title: "How to Build Climate Change-Resilient Infrastructure",
    tagId: 1,
    timestampCreateAt: 1700645567,
    countComments: 4,
    text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis. Integer bibendum turpis convallis enim, nibh convallis. Integer bibendum turpis convallis enim, nibh convallis.",
  },
  {
    id: 2,
    link: "#",
    image: "recentnews1.png",
    title: "How Construction Can Help Itself",
    tagId: 2,
    timestampCreateAt: 1620659867,
    countComments: 0,
    text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis. Integer bibendum turpis convallis enim, nibh convallis. Integer bibendum turpis convallis enim, nibh convallis.",
  },
  {
    id: 3,
    link: "#",
    image: "recentnews3.png",
    title: "Types of Flooring Materials",
    tagId: 3,
    timestampCreateAt: 1710659867,
    countComments: 1,
    text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis. Integer bibendum turpis convallis enim, nibh convallis. Integer bibendum turpis convallis enim, nibh convallis.",
  },
];
</script>

<template>
  <section class="recentnews">
    <div class="recentnews__wrapper">
      <RecentNewsCard
        v-for="card in recentNewsCard"
        :key="card.id"
        :link="card.link"
        :image="card.image"
        :title="card.title"
        :tagId="card.tagId"
        :timestampCreateAt="card.timestampCreateAt"
        :countComments="card.countComments"
        :text="card.text"
      />
    </div>
    <ElementsLearnMore
      :text="'Explore all our news posts'"
      :link_title="'View all news'"
      :link="'https://google.com'"
    />
  </section>
</template>

<style lang="sass">
.recentnews
    margin-bottom: 80px
.recentnews__wrapper
    display: grid
    grid-template-columns: repeat(12, 1fr)
    grid-template-rows: repeat(2, 1fr)
    gap: 30px
    margin-bottom: 80px
</style>
