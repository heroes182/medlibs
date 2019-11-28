<template>
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
</template>

<script>
    export default {
        props: [
            'fields'
        ]
    };
</script>