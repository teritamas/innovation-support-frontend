import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    newProposal: {},
    registeredProposalId: "",
    proposalAttachmentFile: {
      filePath: "",
      fileName: "",
    },
    proposalLists: "",
    proposal: {},
  },
  getters: {
    registeredProposalId(state) {
      return state.registeredProposalId;
    },
    newProposal(state) {
      return state.newProposal;
    },
    proposal(state) {
      return state.proposal;
    },
    file(state) {
      return state.proposalAttachmentFile;
    },
    proposalLists(state) {
      return state.proposalLists;
    },
    token(state, getters, rootState, rootGetters) {
      return rootGetters["token"];
    },
  },
  mutations: {
    initialize(state) {
      state.newProposal = {};
    },
    setRegisteredProposalId(state, registeredProposalId) {
      state.registeredProposalId = registeredProposalId;
    },
    setNewProposal(state, newProposal) {
      state.newProposal = newProposal;
    },
    setProposal(state, proposal) {
      state.proposal = proposal.proposal;
    },
    setProposalLists(state, proposalLists) {
      state.proposalLists = proposalLists.proposals;
    },
    setProposalAttachmentFile(state, commit) {
      state.proposalAttachmentFile = commit;
    },
  },
  actions: {
    getProposalList(state) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri = process.env.VUE_APP_API_ENDPOINT + "proposal";
      return client
        .get(termRequestUri, {
          withCredentials: false,
          headers: {
            Authorization: state.getters.token,
          },
        })
        .then((response) => {
          state.commit("setProposalLists", response.data);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
    getProposal(state, commit) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri =
        process.env.VUE_APP_API_ENDPOINT + "proposal/" + commit;
      return client
        .get(termRequestUri, {
          withCredentials: false,
          headers: {
            Authorization: state.getters.token,
          },
        })
        .then((response) => {
          state.commit("setProposal", response.data);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
    getProposalFile(state, commit) {
      const client = applyCaseMiddleware(axios.create());
      const termRequestUri =
        process.env.VUE_APP_API_ENDPOINT + "proposal/" + commit + "/attachment";
      return client
        .get(termRequestUri, {
          withCredentials: false,
          headers: {
            Authorization: state.getters.token,
          },
          responseType: "blob",
        })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const url = (window.URL || window.webkitURL).createObjectURL(blob);
          state.commit("setProposalAttachmentFile", {
            filePath: url,
            fileName: "提案ファイル",
          });
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
    storeNewProposal(state, commit) {
      state.commit("setNewProposal", commit.newProposal);
    },
    storeFile(state, commit) {
      state.commit("setProposalAttachmentFile", commit);
    },
    registerProposal(state, commit) {
      const termRequestUri = process.env.VUE_APP_API_ENDPOINT + "proposal";
      const client = applyCaseMiddleware(axios.create());
      const form = new FormData();
      const newProposal = commit.newProposal;
      // jsonにしたためapplyCaseMiddlewareで変換されなかったのでべた書き
      const request = {
        title: newProposal.title,
        description: newProposal.description,
        proposal_phase: newProposal.proposalPhase,
        is_recruiting_teammates: newProposal.isRecruitingTeammates,
        other_contents: newProposal.otherContents,
        tags: [],
        user_id: newProposal.userId,
        slack_notification_channels: ["string"],
      };
      form.append("request", JSON.stringify(request));
      form.append("file", commit.file);
      state.commit("setRegisteredProposalId", "");
      return client
        .post(termRequestUri, form, {
          headers: {
            Authorization: state.getters.token,
            "Content-Type": "multipart/form-data",
            accept: "application/json",
          },
        })
        .then((response) => {
          state.commit("setRegisteredProposalId", response.data.proposalId);
        })
        .catch((err) => {
          (this.errored = true), (this.error = err);
        });
    },
  },
};
