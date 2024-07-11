<script setup>
const servicesCard = [{
    id: 1,
    image: 'image.png',
    icon: 'services1.svg',
    title: 'Construction'
},{
    id: 2,
    image: 'image.png',
    icon: 'services2.svg',
    title: 'Project Development'
},{
    id: 3,
    image: 'image.png',
    icon: 'services3.svg',
    title: 'Interior Design'
},{
    id: 4,
    image: 'image.png',
    icon: 'services4.svg',
    title: 'Repairs'
},]
</script>

<template>
    <div class="services">
        <ServicesCard 
            v-for="card in servicesCard"
            :key="card.id"
            :image="card.image"
            :icon="card.icon"
            :title="card.title"
        />
    </div>
</template>

<style lang="sass">
.services
    display: flex
    justify-content: space-between
</style>