// src/utils/matchAlgorithm.js

export default function computeMatchScore(worker, job) {
  // TRADE / SKILL MATCH
  const tradeMatch = worker.trade === job.trade ? 1 : 0;

  const text = (job.title + " " + (job.description || "")).toLowerCase();
  const skillMatches = worker.skills.reduce((acc, s) => {
    return acc + (text.includes(s.toLowerCase()) ? 1 : 0);
  }, 0);

  const skillMatch = Math.min(
    1,
    0.5 * tradeMatch + 0.5 * (skillMatches / Math.max(1, worker.skills.length))
  );

  // PAY SCORE
  const min = Number(job.minPay) || 0;
  const max = Number(job.maxPay) || min + 1000;
  const ask = worker.baseAsk;

  let payScore = 0;
  if (ask >= min && ask <= max) {
    payScore = 1;
  } else {
    const mid = (min + max) / 2;
    const diff = Math.abs(mid - ask);
    payScore = Math.max(0, 1 - diff / Math.max(1, mid * 0.7));
  }

  // DISTANCE SCORE
  const dist = worker.locationKm ?? 999;
  const distanceScore =
    dist <= 2 ? 1 :
    dist <= 5 ? 0.8 :
    dist <= 10 ? 0.5 : 0.2;

  // EXPERIENCE SCORE
  const exp = Math.min(12, worker.experienceYears) / 12;

  // FINAL SCORE (WEIGHTED)
  const wSkill = 0.4;
  const wPay = 0.25;
  const wDistance = 0.2;
  const wExp = 0.15;

  const score =
    skillMatch * wSkill +
    payScore * wPay +
    distanceScore * wDistance +
    exp * wExp;

  return Math.round(score * 100);
}
