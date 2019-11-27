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

<style>
    html {
        background: linear-gradient(rgb(183, 201, 238), rgb(130, 146, 179));
        height: 100%;
        min-height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
