<template>
    <div v-if="statusBadge"
        class="purchase-status-badge-object font-bold purchased-status-badge"
    >
        {{ statusBadge }}
    </div>
</template>


<script>
export default {
  name: "statusBadge",
    props: {
        purchasedUsers: Array,
  },
  computed: {
    detail() {
      return this.$store.getters["userStore/detail"];
    },
    statusBadge() {
      let badge = false;
      if(this.purchasedUsers===undefined){
        return badge;
      }
      const purchasedUsers = this.purchasedUsers.filter((x) => {
        if (x === this.detail.userId) {
          return x;
        }
      });
      // カードの右上のステータスバッジに掲載する内容
      if (purchasedUsers.length === 1) return badge = "購入済み";
      return badge;
    },
  },
};
</script>

<style lang=scss scoped>
.purchase-status-badge-object {
  position: absolute;
  top: 0px;
  left: 0;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  border-radius: 0 0 10px 0;
}

.purchased-status-badge {
  background: #939087;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}
</style>
