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
                <p v-text="firstParagraph" />
                <p v-text="secondParagraph" />
                <div class="options">
                    <div class="option selected"
                        @click="copyToClipboard"
                        v-text="'Copy to Clipboard'" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .fields {
        display: flex;
    }
    .field {
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 16px;
        margin: 0 0.5% 16px 0.5%;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    .label {
        color: #333;
        font-size: 82%;
        display: block;
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        font-weight: bold;
        text-transform: capitalize;
    }
    .options {
        display: flex;
    }
    .option {
        flex: 1;
        font-weight: bold;
        border: 1px solid #333;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0.8;
        padding: 4px;
        margin: 0 1%;
        background: linear-gradient(#dedede, #ccc);
    }
    .selected {
        border-color: #999;
        opacity: 1;
        background: linear-gradient(#fff, #dedede);
    }
    .option:active {
        background: linear-gradient(#c4b8b8, #999);
    }
    p {
        text-align: left;
        margin-top: 0;
    }
    @media screen and (max-width: 640px) {
        .fields {
            flex-direction: column;
        }
    }
</style>

<script>
    export default {
        data () {
            return {
                name: 'medlibsForm',
                fields: [
                    {
                        label: 'Sleep Apnea',
                        options: ['mild', 'moderate', 'severe'],
                        value: 'mild'
                    },
                    {
                        label: 'Central Sleep Apnea',
                        options: ['mild', 'moderate', 'severe'],
                        value: 'mild'
                    },
                    {
                        label: 'Oxygen Average',
                        options: ['< 88', '> 88'],
                        value: '< 88'
                    }
                ],
                paragraphTemplates: {
                    firstParagraph: {
                        mild: 'This is the mild version of the first paragraph, its very mild and stuff. Lorem ipsum REPLACEME dolor sit amet, consectetur adipiscing elit, REPLACEME sed do eiusmod tempor incididunt ut REPLACEME labore et dolore magna aliqua. Ut REPLACEME enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        moderate: 'When apnea is moderate, you get this paragraph instead. Praesent REPLACEME tristique magna sit amet purus. Sit amet consectetur REPLACEME adipiscing elit duis tristique. At volutpat diam ut venenatis REPLACEME tellus in metus. In aliquam REPLACEME sem fringilla ut morbi tincidunt augue.',
                        severe: 'Severe apnea results in this paragraph, it so berry scary ohmygaaaaad. Pellentesque id nibh tortor id aliquet lectus. In aliquam sem fringilla REPLACEME ut morbi tincidunt augue REPLACEME interdum velit. Mi eget mauris pharetra et ultrices neque REPLACEME ornare aenean.'
                    },
                    secondParagraph: 'This is the extra paragraph that shows when oxygen level is greater than 88. At volutpat diam ut venenatis tellus in metus.'
                }
            };
        },
        computed: {
            firstParagraph () {
                let out = this.paragraphTemplates.firstParagraph[this.findField('Sleep Apnea').value];
                out = out.replace(/REPLACEME/g, this.findField('Central Sleep Apnea').value);
                return out;
            },
            secondParagraph () {
                let out = null
                if (this.findField('Oxygen Average').value === '> 88') {
                    out = this.paragraphTemplates.secondParagraph;
                }
                return out;
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
