<template>
    <div id="app">
        <Form :fields="fields" />
        <Output :computed-paragraph="computedParagraph" />
    </div>
</template>

<script>
    import fields from '@/assets/fields.json';
    import paragraphs from '@/assets/paragraphs.json';

    export default {
        name: 'MedLibs',
        components: {
            'Form': () => import('@/components/form'),
            'Output': () => import('@/components/output')
        },
        data () {
            return {
                name: 'medlibsForm',
                fields: fields,
                paragraphs: paragraphs
            };
        },
        computed: {
            computedParagraph () {
                return this.paragraphs.NoOsa;
            }
        },
        methods: {
            findField (fieldName) {
                return this.fields.find(field => { return field.label === fieldName });
            }
        }
    };
</script>
