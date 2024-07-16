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
    <section class="services">
        <div class="wrapper">
            <h2 class="section-title">Our services</h2>
            <p class="section-description">
            Createx Construction Bureau is a construction giant with a full range of construction services.
            </p>
            <div class="services__wrapper">
                <ServicesCard 
                v-for="card in servicesCard"
                :key="card.id"
                :image="card.image"
                :icon="card.icon"
                :title="card.title"
                />
            </div>
            <ElementsLearnMore 
                :text="'Learn more about our services'"
                :link="'https://google.com'"
                :link_title="'View services'"
            />
        </div>
    </section>
</template>

<style lang="sass">
.services
    background: url('assets/image/backgroundServices.png')
    padding: 212px 0 80px
.services__wrapper
    display: flex
    justify-content: space-between
    margin-bottom: 80px
</style>