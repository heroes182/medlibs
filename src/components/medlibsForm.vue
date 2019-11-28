<template>
    <section>
        <div class="fields">
            <div v-for="(field, index) in fields"
                :key="index"
                class="field">
                <label class="label"
                    v-text="field.label +': ' + field.value" />
                <div class="options">
                    <div v-for="(option, index) in field.options"
                        :key="index"
                        :class="{'selected': option === field.value}"
                        class="option"
                        v-text="option"
                        @click="field.value = option" />
                </div>
            </div>
        </div>
        <div class="fields">
            <div class="field">
                <label class="label"
                    v-text="'Output Paragraph'" />
                <p class="paragraph"
                   v-text="computedParagraph" />
                <div v-if="isHttps"
                     class="options">
                    <div class="option selected"
                        @click="copyToClipboard"
                        v-text="'Copy to Clipboard'" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import form from '@/assets/form.json';
    import paragraphs from '@/assets/paragraphs.json';

    export default {
        data () {
            return {
                name: 'medlibsForm',
                fields: form,
                paragraphs: paragraphs
            };
        },
        computed: {
            isHttps () {
                return location.protocol === 'https';
            },
            computedParagraph () {
                return this.paragraphs.NoOsa;
            }
        },
        methods: {
            findField (fieldName) {
                return this.fields.find(field => { return field.label === fieldName });
            },
            copyToClipboard () {
                let out = this.firstParagraph;
                if (this.secondParagraph) out += this.secondParagraph;
                navigator.clipboard.writeText(out);
            }
        }
    };
</script>
