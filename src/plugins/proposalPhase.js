export const phaseStatus = function (phase) {
  let phaseJpName = "シード";
  let limitDate = 7;
  let procurementTokenAmount = 500; // 500千円
  let minVoterCount = 50;
  let minAgreementCount = "50%";
  if (phase === "early") {
    phaseJpName = "early";
    limitDate = 7;
    procurementTokenAmount = 1000; // 1,000千円
    minVoterCount = 100;
    minAgreementCount = "50%";
  } else if (phase === "middle") {
    phaseJpName = "ミドル";
    limitDate = 14;
    procurementTokenAmount = 5000; // 5,000千円
    minVoterCount = 200;
    minAgreementCount = "60%";
  } else if (phase === "later") {
    phaseJpName = "レイター";
    limitDate = 21;
    procurementTokenAmount = 10000; // 10,000千円
    minVoterCount = 300;
    minAgreementCount = "70%";
  } else if (phase === "growth") {
    phaseJpName = "グロース";
    limitDate = 21;
    procurementTokenAmount = 50000; // 50,000千円
    minVoterCount = 500;
    minAgreementCount = "80%";
  }

  return {
    phaseJpName: phaseJpName,
    limitDate: limitDate,
    procurementTokenAmount: procurementTokenAmount,
    minVoterCount: minVoterCount,
    minAgreementCount: minAgreementCount,
  };
};
