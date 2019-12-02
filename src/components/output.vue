<template>
    <div class="fields">
        <div class="field">
            <label class="label"
                v-text="'Output Paragraph: ' + paragraphKey" />
            <textarea class="paragraph"
                v-model="paragraph" />
        </div>
    </div>
</template>

<script>
    import paragraphs from '@/assets/paragraphs.json';
    export default {
        props: [
            'fields'
        ],
        data () {
            return {
                paragraphKey: null,
                paragraph: null
            };
        },
        created () {
            this.updateParagraph();
            this.$root.$on('updateParagraph', () => {
                this.updateParagraph();
            });
        },
        methods: {
            updateParagraph () {
                // Osa
                this.paragraphKey =
                    this.fields.AHI.value < 5 ? 'NoOsa'
                    : this.fields.AHI.value < 15 ? 'MildOsa'
                    : this.fields.AHI.value < 30 ? 'ModerateOsa'
                    : 'SevereOsa';

                // Cai
                this.paragraphKey +=
                    this.fields.CAI.value < 5 ? 'Solo'
                    : 'Mixed';

                // Avg
                this.paragraphKey +=
                    this.fields.AVG.value < 88 ? 'AvgNeg'
                    : 'AvgPos';

                this.paragraph =
                    paragraphs[this.paragraphKey]
                    .replace(/_AHI_/g, this.fields.AHI.value)
                    .replace(/_CAI_/g, this.fields.CAI.value)
                    .replace(/_AVG_/g, this.fields.AVG.value)
                    .replace(/_NADIR_/g, this.fields.NADIR.value)
                    .replace(/_SEVERITY_/g, this.fields.SEVERITY.value)
                    .replace(/_CENTRAL_/g, this.fields.CENTRAL.value);
            }
        }
    }
</script>