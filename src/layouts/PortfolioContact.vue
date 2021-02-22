<template>
    <div id="contact" class="py-5">
        <h2 class="text-center  h1 mb-5">ME CONTACTER</h2>
        <ContactForm />
    </div>
</template>

<style lang="scss" scoped>
    #contact {
        background-color: #26292e;
        color: #3e92a3;
        h2 {
            letter-spacing: 0.5rem;
        }
    }
</style>

<script lang="ts">
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    }
}
</script>