<template>
    <AppHeaderPropose />
    <div class="p-3">
        <IdeaCards />
    </div>
</template>

<script>
import IdeaCards from '../components/IdeaCards.vue'
import AppHeaderPropose from '../components/AppHeaderPropose.vue'

export default {
  name: 'idea-list',
  components: {
    IdeaCards,
    AppHeaderPropose,
  }
}
</script>

<style>
</style>
