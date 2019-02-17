<template>
    <div>
        <v-card color="accent" class="white--text">
            <v-card-title primary-title class="headline">
                {{part.title}}
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
    export default {
        props:{
            'part':{
                type: Object,
                required: true
            },
            'bookId':{
                required: true
            }
        },
    }
</script>

<style scoped>

</style>