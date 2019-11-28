<template>
    <div id="app">
        <h1 v-text="name" />
        <medlibsForm />
    </div>
</template>

<script>
    import medlibsForm from '@/components/medlibsForm';

    export default {
        name: 'app',
        components: {
            medlibsForm
        },
        data () {
            return {
                name: 'MedLibs'
            };
        }
    };
</script>
