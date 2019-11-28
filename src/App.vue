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
                let out;
                if (this.fields.NADIR.value === '100') out = this.paragraphs.NoOsa;
                else out = this.paragraphs.OsaMild;
                return out.replace(/_AHI_/g, this.fields.AHI.value)
                          .replace(/_AVG_/g, this.fields.AVG.value)
                          .replace(/_SEVERITY_/g, this.fields.SEVERITY.value)
                          .replace(/_NADIR_/g, this.fields.NADIR.value);
            }
        }
    };
</script>
