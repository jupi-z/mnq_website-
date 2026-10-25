// Avoid accidentally emitting an indexable production build by merely toggling one variable.
const ready = process.env.NEXT_PUBLIC_SITE_READY === "true";
if (ready && process.env.MONARQUE_RELEASE_APPROVED !== "YES") {
  console.error("PUBLICATION BLOCKED: NEXT_PUBLIC_SITE_READY=true requires MONARQUE_RELEASE_APPROVED=YES after documented legal, privacy, editorial and VPS approvals. See docs/RELEASE.md.");
  process.exit(1);
}
console.log(ready ? "Public indexing explicitly enabled for this build." : "Preview/non-indexable build.");
