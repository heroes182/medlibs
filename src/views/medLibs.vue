<template>
    <section>
        <Form :fields="fields" />
        <Output :computed-paragraph="computedParagraph" />
    </section>
</template>

<script>
    import fields from '@/assets/fields.json';
    import paragraphs from '@/assets/paragraphs.json';

    export default {
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
