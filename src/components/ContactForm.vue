<template>
    <form id="contactForm" class="d-flex flex-column col-lg-4 mx-auto rounded p-5 text-white">
        <label for="inputName">NOM</label>
        <input id="inputName" type="text" class="mb-2">
        <label for="inputMail">EMAIL</label>
        <input id="inputMail" type="email" class="mb-2">
        <label for="inputSubject">SUJET</label>
        <input id="inputSubject" type="text" class="mb-2">
        <label for="inputContent">MESSAGE</label>
        <textarea id="inputContent"></textarea>
        <button type="submit" class="btn text-white my-3" disabled>Envoyer</button>
        <small class="text-center">Le formulaire de contact n'est pas encore fonctionnel</small>
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
        button {
            background-color: #26292e;
            &:hover {
                background-color: #FF5335;
            }
        }
        small {
            color: #FF5335;
        }
    }
</style>