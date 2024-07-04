<template>
    <div class="contacts">
        <div class="contacts__item">
            <img src="@/assets/img/iPhone.svg" alt="phone" class="contacts__item-phone">
            <div class="contacts__item-text">
                <p class="contacts__item-title">Call us</p>
                <p class="contacts__item-contact">(405) 555-0128</p>
            </div>
        </div>
        <div class="contacts__item">
            <img src="@/assets/img/Chat.svg" alt="chat" class="contacts__item-phone">
            <div class="contacts__item-text">
                <p class="contacts__item-title">Talk to us</p>
                <p class="contacts__item-contact">hello@createx.com</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass">
.contacts
    display: flex
    &__item
        display: flex
        margin-left: 40px
        &-text
            margin-left: 12px
            .contacts__item-title
                @include font-styles(14px, 700, 150%, 0, $header_gray)

            .contacts__item-contact
                @include font-styles(18px, 400, 150%, 0, $dark)
</style>