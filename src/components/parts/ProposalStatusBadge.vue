<template>
    <div
        class="proposal-status-badge-object font-bold"
        :class="
        isVoting
            ? 'proposal-status-badge-voting'
            : 'proposal-status-badge-vote-end'
        "
    >
        {{ statusBadge }}
    </div>
</template>


<script>
export default {
  name: "statusBadge",
    props: {
    proposalOwnType: String,
    proposalStatus: String,
  },
  computed: {
    isVoting() {
      // 提案が投票中の場合True
      return this.proposalStatus === "voting";
    },
    statusBadge() {
      // カードの右上のステータスバッジに掲載する内容
      let badge = "";
      if (this.isVoting) {
        if (this.proposalOwnType == "voted") {
          badge = "投票済み";
        } else if (this.proposalOwnType == "unvoted") {
          badge = "投票できます！";
        } else if (this.proposalOwnType == "owner") {
          badge = "あなたの提案が投票中です！";
        } else {
          badge = "投票受付中です！";
        }
      } else {
        badge = "投票終了";
      }
      return badge;
    },
  },
};
</script>

<style lang=scss scoped>

.proposal-status-badge-area {
  position: relative;
}
.not-show-vote-result {
  height: 90px;
  padding: 15px;
}
.proposal-status-badge-object {
  position: absolute;
  top: 0px;
  left: 0;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  border-radius: 0 0 10px 0;
}

.proposal-status-badge-voting {
  background: #ffca28;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}

.proposal-status-badge-vote-end {
  background: #939087;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}
</style>
