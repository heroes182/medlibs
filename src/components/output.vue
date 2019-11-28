<template>
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
</template>

<script>
    export default {
        props: [
            'computedParagraph'
        ],
        computed: {
            isHttps () {
                return location.protocol === 'https';
            }
        },
        methods: {
            copyToClipboard () {
                navigator.clipboard.writeText(this.computedParagraph);
            }
        }
    }
</script>