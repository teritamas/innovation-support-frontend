export const phaseStatus = function (phase) {
  let phaseJpName = "シード";
  let limitDate = 7;
  let procurementTokenAmount = 50; // 500千円
  let minVoterCount = 50;
  let minAgreementCount = 0.5;
  if (phase === "アーリー") {
    phaseJpName = "early";
    limitDate = 7;
    procurementTokenAmount = 100; // 1,000千円
    minVoterCount = 100;
    minAgreementCount = 0.5;
  } else if (phase === "middle") {
    phaseJpName = "ミドル";
    limitDate = 14;
    procurementTokenAmount = 500; // 5,000千円
    minVoterCount = 200;
    minAgreementCount = 0.6;
  } else if (phase === "later") {
    phaseJpName = "レイター";
    limitDate = 21;
    procurementTokenAmount = 1000; // 10,000千円
    minVoterCount = 300;
    minAgreementCount = 0.7;
  } else if (phase === "growth") {
    phaseJpName = "グロース";
    limitDate = 21;
    procurementTokenAmount = 5000; // 50,000千円
    minVoterCount = 500;
    minAgreementCount = 0.8;
  }

  return {
    phaseJpName: phaseJpName,
    limitDate: limitDate,
    procurementTokenAmount: procurementTokenAmount,
    minVoterCount: minVoterCount,
    minAgreementCount: minAgreementCount,
  };
};