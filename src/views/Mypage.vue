<template>
    <div class="p-3 pt-0 mb-10 bg-white">
        <div class="Form mb-10">
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>事業名（30字以内）</p>
                <p>{{ $store.state.newProposion.businessName }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>事業概要（300字以内）</p>
                <p>{{ $store.state.newProposion.businessSummary }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>目標金額</p>
                <p>{{ $store.state.newProposion.targetAmount }}</p>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option">任意</span>添付資料（PDF）</p>
                <div class="preview-item w-100 mt-2">
                <embed
                    v-show="$store.state.newProposion.filePath"
                    class="preview-item-file"
                    :src="$store.state.newProposion.filePath"
                    alt=""
                />
                <div v-show="$store.state.newProposion.filePath" class="preview-item-btn">
                    <p class="preview-item-name isMsg py-2">ファイル名：{{ $store.state.newProposion.fileName }}</p>
                </div>
                </div>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label mb-2"><span class="Form-Item-Label-Option">任意</span>仲間募集</p>
                <p v-if="$store.state.newProposion.members == 1">募集する</p>
                <p v-if="$store.state.newProposion.members == 0">募集しない</p>
             </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option">任意</span>その他（500字以内）</p>
                <p>{{ $store.state.newProposion.remarks }}</p>
            </div>
            <input type="submit" class="Form-Btn mb-10" value="上記の内容で投稿する">
            </div>
        </div>

</template>

<script>
//import IdeaCards from '../components/IdeaCards.vue'

export default {
  name: 'propose-form',
  components: {
    //IdeaCards
  },
  data() {
    return {
      newProposion: this.$store.state.newProposion
    };
  },
  computed: {
  },
  methods: {
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

.Form {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
.Form-Item {
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}

.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
}
.Form-Item-Label-Required {
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

.Form-Item-Label-Option {
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
@media screen and (max-width: 480px) {
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }

  .Form-Item-Label-Option {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}

.Form-Btn {
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
@media screen and (max-width: 480px) {
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 200px;
    font-size: 16px;
  }
}
</style>
