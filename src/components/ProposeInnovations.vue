<template>
    <div class="p-3 pt-0 mb-10 bg-white">
        <div class="Form mb-10">
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>事業名（30字以内）</p>
                <input
                    type="text"
                    v-model="newProposal.title"
                    class="Form-Item-Input"
                    placeholder="例）アノテーション支援事業"
                >
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>事業概要（300字以内）</p>
                <textarea
                    v-model="newProposal.descriptions"
                    class="Form-Item-Textarea"
                ></textarea>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>目標金額</p>
                <input
                    type="text"
                    v-model="newProposal.targetAmount"
                    class="Form-Item-Input"
                    placeholder="例）500万円"
                >
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option">任意</span>添付資料（PDF）</p>
                <label v-show="!newProposal.filePath" class="border file mt-2 input-item__label">ファイルを選択
                <input type="file" @change="onFileChange" />
                </label>
                <div class="preview-item w-100 mt-2">
                <embed
                    v-show="newProposal.filePath"
                    class="preview-item-file"
                    :src="newProposal.filePath"
                    alt=""
                />
                <div
                    v-show="newProposal.filePath"
                    class="preview-item-btn"
                    @click="remove"
                >
                    <p class="preview-item-name isMsg py-2">ファイル名：{{ newProposal.fileName }}</p>
                    <div class="flex preview-item-icon isMsg border p-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-6 h-6">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                        </svg>
                        ファイルを選びなおす</div>
                </div>
                </div>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label mb-2"><span class="Form-Item-Label-Option">任意</span>仲間募集</p>
                <div class="radio-button-group mts w-100">
                    <div class="item">
                        <input
                            type="radio"
                            v-model="newProposal.isRecruitingTeammates"
                            class="radio-button"
                            value=false
                            id="button2"
                        />
                        <label for="button2">募集しない</label>
                    </div>
                    <div class="item">
                        <input
                            type="radio"
                            v-model="newProposal.isRecruitingTeammates"
                            class="radio-button"
                            value=true
                            id="button1"
                        />
                        <label for="button1">募集する</label>
                    </div>
                </div>
             </div>
            <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Option">任意</span>その他（500字以内）</p>
                <textarea
                    v-model="newProposal.otherContents"
                    class="Form-Item-Textarea"
                ></textarea>
            </div>
            <button class="Form-Btn mb-10" v-on:click="showConfirmView">確認画面へ進む</button>
            </div>
        </div>

</template>

<script>
export default {
  name: 'propose-form',
  components: {
  },
  data() {
    return {
     showContentsType: this.$store.state.showContentsType,
    };
  },
  computed: {
    newProposal() {
        return this.$store.getters['proposalStore/newProposal'];
    },
  },
  methods: {
    showConfirmView : function () {
        this.$router.push('/proposeConfirm');
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
      this.newProposal.fileName = files[0].name;
    },
    // アップロードした画像を表示
    createImage(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.newProposal.filePath = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    remove() {
      this.newProposal.filePath = false;
    },
  },
}

</script>

<style scoped>
.radio-button-group {
  display: flex;
  width: 100%;
}
.radio-button-group .item {
  width: 100%;
}
.radio-button-group .radio-button {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.radio-button-group .radio-button + label {
    padding: 6px 10px;
    cursor: pointer;
    border: 1px solid #dadada;
    margin-right: -2px;
    color: #555;
    background-color: #ffffff;
    display: block;
    text-align: center;
}
.radio-button-group .item:first-of-type .radio-button + label{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.radio-button-group .item:last-of-type .radio-button + label {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.radio-button-group .radio-button:checked + label {
    background-color: rgb(251 191 36);
    color: #FFF;
}

.file {
    width: 100%;
    background: #fbfdff;
}

label.file > input[type='file'] {
  display: none;
}
label.file::before {
  content: '+';
  font-size: 1rem;
  color: #888;
  padding-right: 1rem;
}

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
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #fbfdff;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #fbfdff;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
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
    width: 160px;
    font-size: 16px;
  }
}

label {
color: #555; /* ラベルテキストの色を指定する */
padding: 10px; /* ラベルとテキスト間の余白を指定する */
}
</style>
