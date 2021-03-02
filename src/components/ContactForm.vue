<template>
    <form id="contactForm" class="d-flex flex-column col-lg-4 mx-auto rounded p-5 text-white shadow" @submit="sendForm">
        <label for="inputName">NOM</label>
        <input id="inputName" type="text" class="mb-2" v-model="name" required maxlength="20">
        <label for="inputMail">EMAIL</label>
        <input id="inputMail" type="email" class="mb-2" v-model="email" required maxlength="20">
        <label for="inputSubject">SUJET</label>
        <input id="inputSubject" type="text" class="mb-2" v-model="subject" required maxlength="50">
        <label for="inputContent">MESSAGE</label>
        <textarea id="inputContent" rows="6" v-model="message" required maxlength="500"></textarea>
        <div class="d-flex py-2 align-items-center">
            <input type="checkbox" v-model="checked" id="checkbox" class="mr-3" required>
            <label for="checkbox"><small :class="{ 'small-enabled' : !isDisabled }">En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour permettre de me recontacter.</small></label>
        </div>
        <button type="submit" class="btn text-white my-3" :disabled="isDisabled">Envoyer</button>
        <small v-if="errors.telegram">Une erreur est survenue</small>
    </form>
</template>

<style lang="scss" scoped>
    #contactForm {
        background-color: #2a2d33;
        input, textarea {
            background-color: #3e92a3;
            border: none;
        }
        label {
            letter-spacing: 0.1rem;
        }
        textarea {
            resize: none;
        }
        button {
            background-color: #26292e;
            &:hover {
                background-color: #FF5335;
            }
        }
        small {
            color: #FF5335;
        }
        .small-enabled {
            color: #3e92a3;
        }
    }
</style>

<script>

export default {
    data: function() {
        return {
            checked: false,
            name: null,
            email: null,
            subject: null,
            message: null,
            errors : []
        }

    },
    computed: {
        isDisabled: function() {
            return !this.checked;
        }
    },
    methods: {
        checkForm: function() {
            this.error = [];

            if(!this.name || this.name.length > 20) {
                this.errors['name'] = true
            }
            if(!this.email || this.email.length > 20) {
                this.errors['email'] = true
            }
            if(!this.subject || this.subject.length > 50) {
                this.errors['subject'] = true
            }
            if(!this.message || this.message.length > 500) {
                this.errors['message'] = true
            }
            if(!this.checked) {
                this.errors['checked'] = true
            }
            if(!this.errors.length) {
                return true;
            }
            return false;
        },
        sendForm: function(e) {
            if(this.checkForm()) {
                const date = new Date();
                const contact = encodeURIComponent(
`Nom : ${this.name}
Email : ${this.email}
Sujet : ${this.subject}
Message : ${this.message}
Utilisation des données accepté le ${date.toLocaleDateString()} à ${date.toLocaleTimeString()}`);

               this.$http.get('https://api.telegram.org/bot1668744144:AAE8ylGpvpURQDRsbeVGmc5mLHJIx9QbnwM/sendMessage?chat_id=215253232&text='+contact)
                .then(() => {return true})
                .catch(() => console.error('Un problème est survenu'));
            }
            else {
            e.preventDefault();
            }
        }
    }
}
</script>