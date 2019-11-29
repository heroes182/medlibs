<template>
    <div class="fields flex">
        <div v-for="(field, index) in fields"
            :key="index"
            class="field">
            <label class="label"
                v-text="field.label +': ' + field.value" />
            <div v-if="field.options"
                 class="flex">
                <div v-for="(option, index) in field.options"
                    :key="index"
                    :class="{'selected': option === field.value}"
                    class="option"
                    v-text="option"
                    @click="field.value = option; $root.$emit('updateParagraph')" />
            </div>
            <div class="flex"
                 v-else>
                <input type="number"
                       @change="$root.$emit('updateParagraph')"
                       v-model="field.value" />
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
