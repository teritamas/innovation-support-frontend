<template>
    <h2 class="font-bold text-center p-2">{{ proposal.title }}</h2>
    <div class="form-item">
        <p class="form-item-label is-msg"><span class="form-item-List"></span>事業概要</p>
        <p>{{ proposal.description }}</p>
    </div>
    <div class="form-item">
        <p class="form-item-label"><span class="form-item-List"></span>目標金額</p>
        <p>{{ proposal.targetAmount }}</p>
    </div>
    <div class="form-item">
        <p class="form-item-label is-msg"><span class="form-item-List"></span>添付資料</p>
        <div class="preview-item w-100 mt-2">
        <embed
            v-show="proposalAttachmentFile.filePath"
            class="preview-item-file"
            :src="proposalAttachmentFile.filePath"
            alt=""
        />
        </div>
    </div>
    <div class="form-item">
        <p class="form-item-label mb-2"><span class="form-item-List"></span>仲間募集</p>
        <p v-if="proposal.isRecruitingTeammates">募集する</p>
        <p v-if="!proposal.isRecruitingTeammates">募集しない</p>
        </div>
    <div class="form-item">
        <p class="form-item-label is-msg"><span class="form-item-List"></span>その他</p>
        <p>{{ proposal.otherContents }}</p>
    </div>
</template>

<script>

export default {
  name: 'proposal-info',
  components: {
  },
  props: {
    proposal: {},
    proposalAttachmentFile: {},
  },
}
</script>

<style scoped>
.preview-item {
    width: 100%;
}
.preview-item-file {
    width: 100%;
    min-height: 300px;
}

.form {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
.form-item {
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .form-item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}

.form-item-label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .form-item-label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.form-item-label.is-msg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .form-item-label.is-msg {
    margin-top: 0;
  }
}

.form-item-label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: rgb(251 191 36);
  color: #fff;
  font-size: 14px;
}

.form-item-label-option {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #545454;
  color: #fff;
  font-size: 14px;
}

.form-item-List {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 4px;
  display: inline-block;
  text-align: center;
  background: rgb(251 191 36);
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .form-item-label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }

  .form-item-label-option {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}

.form-btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: rgb(251 191 36);
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}

.form-return-btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #555;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .form-btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
  }

  .form-return-btn {
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
}
}
</style>
