const sr = ScrollReveal({
  distance: "75px",
  duration: 2600,
  delay: 450,
  reset: true,
});

const sr2 = ScrollReveal({
  distance: "45px",
  duration: 2600,
  delay: 450,
  reset: true,
});


// sr.reveal(".experience-row", { delay: 300, origin: "bottom" });


sr.reveal(".R-introduction", { delay: 300, origin: "left" });
sr2.reveal(".profile img", { delay: 300, origin: "top" });
sr2.reveal(".profile-text", { delay: 500, origin: "top" });
sr2.reveal(".experience h2", { delay: 300, origin: "bottom" });
sr2.reveal(".experience img", { delay: 400, origin: "top" });
sr2.reveal(".experience-text", { delay: 500, origin: "bottom" });
sr.reveal(".certificates h2", { delay: 300, origin: "top" });
sr.reveal(".certificates div", { delay: 500, origin: "top" });
sr.reveal(".mail", { delay: 400, origin: "left" });
sr.reveal(".mobile", { delay: 400, origin: "right" });
sr.reveal(".D-needs", { delay: 300, origin: "bottom" });
sr2.reveal(".social a:nth-child(1)", { delay: 200, origin: "bottom" });
sr2.reveal(".social a:nth-child(2)", { delay: 400, origin: "bottom" });
sr2.reveal(".social a:nth-child(3)", { delay: 600, origin: "bottom" });
sr2.reveal(".social a:nth-child(4)", { delay: 700, origin: "bottom" });

