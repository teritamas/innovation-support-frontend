<template>
    <AppHeaderPropose />
    {{ proposalLists }}
    <div class="p-3">
        <ProposalCards />
    </div>
</template>

<script>
import ProposalCards from '../components/ProposalCards.vue'
import AppHeaderPropose from '../components/AppHeaderPropose.vue'

export default {
  name: 'proposa-list',
  components: {
    ProposalCards,
    AppHeaderPropose,
  },
  computed: {
    proposalLists() {
        return this.$store.getters['proposalStore/proposalLists'];
    },
  },
}
</script>

<style>
</style>
