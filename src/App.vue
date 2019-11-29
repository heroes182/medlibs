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
                fields: fields,
            };
        },
        computed: {
            computedParagraph () {
                let paragraphKey =
                        this.fields.AHI.value > 5 ? 'NoOsa'
                        : this.fields.AHI.value < 15 ? 'MildOsa'
                        : this.fields.AHI.value < 30 ? 'ModerateOsa'
                        : 'SevereOsa';
                if (this.fields.CAI.value <= 5) paragraphKey += 'Cai';
                if (this.fields.AVG.value <= 88) paragraphKey += 'Avg';

                return paragraphs[paragraphKey]
                    .replace(/_AHI_/g, this.fields.AHI.value)
                    .replace(/_CAI_/g, this.fields.CAI.value)
                    .replace(/_AVG_/g, this.fields.AVG.value)
                    .replace(/_NADIR_/g, this.fields.NADIR.value)
                    .replace(/_SEVERITY_/g, this.fields.SEVERITY.value)
                    .replace(/_CENTRAL_/g, this.fields.CENTRAL.value);
            }
        }
    };
</script>
