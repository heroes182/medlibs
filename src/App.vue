<template>
    <div id="app">
        <Form :fields="fields" />
        <Output :fields="fields" />
    </div>
</template>

<script>
    import fields from '@/assets/fields.json';

    export default {
        name: 'MedLibs',
        components: {
            'Form': () => import('@/components/form'),
            'Output': () => import('@/components/output')
        },
        data () {
            return {
                fields: fields
            };
        }
    };
</script>
