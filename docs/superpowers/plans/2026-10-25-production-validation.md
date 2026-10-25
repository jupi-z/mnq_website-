# MonarQue Group Production Validation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Audit, correct, validate and conditionally deploy the MonarQue Group institutional static site without publishing unverified legal, editorial or infrastructure claims.

**Architecture:** Keep the existing Next.js static export and Nginx delivery model. Separate repository correctness from live infrastructure evidence, build a noindex preproduction artifact from a recorded SHA, and promote only the same validated artifact after backup, rollback preparation and explicit release-gate verification.

**Tech Stack:** Next.js 16 static export, React 19, TypeScript, Playwright, Node scripts, Nginx, SSH (`ssh kit-service`).

**Spec:** `docs/CODEX-HANDOFF-PRODUCTION.md` and its referenced `docs/STRATEGIE.md`, `docs/REGISTRE-PUBLICATION.md`, `docs/RELEASE.md`, `docs/AUDIT-CODEX.md`, `docs/DEPLOIEMENT.md`, and `docs/DESIGN.md`.

## Global Constraints

- `NEXT_PUBLIC_COMPANY_OPERATIONAL` remains false until independently evidenced; the site must not claim commercial operations have started.
- LTEX is an internal technology pole, Zingatia is an activity/brand, products remain in development, and prospective projects are not presented as operating infrastructure.
- No secrets, private identity data, unverified clients, references, partners, RCCM/ID numbers or legal claims may be invented.
- Preview remains `NEXT_PUBLIC_SITE_READY=false` and noindex until technical, editorial, legal and infrastructure gates are evidenced.
- Preserve other VPS services; inventory exact targets before any change, back up configuration and use reversible release directories.
- Do not claim tests, public publication, email reception, DNS, TLS, rollback or monitoring without fresh command evidence.

## Review Focus

- Missing or inaccurate legal identifiers and hosting disclosures: gate publication and document exact missing evidence.
- Contact address that is displayed but not proven to receive mail: test or keep publication blocked.
- Status wording that turns an internal pole, brand, product or prospect into a company or operating activity: inspect FR/EN content and schema.
- Static export, historical redirects, robots/sitemap/canonical/hreflang and 404 behavior: verify from the built artifact and HTTP server.
- Existing Nginx/VPS coexistence, backup and rollback: validate before changing anything.

### Task 1: Baseline audit and evidence capture

**Files:**
- Inspect: repository source, tests, docs, deployment config
- Create: `docs/AUDIT-RESULTS-2026-10-25.md`

**Interfaces:**
- Produces: recorded source SHA, executed command results, P0-P3 findings, and a release-gate checklist for later tasks.

- [ ] Run dependency install, typecheck, build, static checks, Playwright and available accessibility/security/SEO checks.
- [ ] Inspect all FR/EN routes, content model, metadata, logos, responsive tests and generated output.
- [ ] Record every anomaly with severity, reproduction, impact, minimal remedy and evidence.

### Task 2: Correct demonstrated repository blockers

**Files:**
- Modify: only files implicated by Task 1 findings
- Test: the smallest relevant unit/static/Playwright regression checks

**Interfaces:**
- Consumes: Task 1 findings.
- Produces: corrected repository with tests covering each fixed P0/P1 or release-blocking defect.

- [ ] For each defect, reproduce the root cause before editing.
- [ ] Add or update a regression check before the minimal fix when practical.
- [ ] Re-run the affected test and the complete mandatory suite; preserve the pre-operational editorial rules.

### Task 3: VPS, DNS, mail, TLS and service inventory

**Files:**
- Create: `docs/INFRASTRUCTURE-AUDIT-2026-10-25.md`

**Interfaces:**
- Produces: redacted live inventory of OS, disk, permissions, listeners, firewall, Nginx/vhosts, services, backups, DNS, TLS renewal and contact-mail evidence.

- [ ] Run read-only SSH inventory without exposing secrets or `.env` values.
- [ ] Resolve A/AAAA and www records; inspect HTTP/HTTPS status, certificate chain/SAN/expiry and renewal configuration.
- [ ] Verify the corporate mailbox through an authorized non-secret evidence path; if not possible, keep the gate open.
- [ ] Identify the exact deployment root and coexistence constraints before any write.

### Task 4: Noindex preproduction and rollback rehearsal

**Files:**
- Modify: deployment scripts/config only if required by verified findings
- Create: `docs/PREPRODUCTION-2026-10-25.md`

**Interfaces:**
- Consumes: validated SHA from Tasks 1-2 and exact VPS targets from Task 3.
- Produces: isolated noindex preview, backup manifest, rollback command/procedure and HTTP evidence.

- [ ] Build the static export with `NEXT_PUBLIC_SITE_READY=false` from the recorded SHA.
- [ ] Deploy to an isolated non-indexable location or staging vhost without disrupting existing services.
- [ ] Validate all pages, assets, redirects, headers, logs, robots/sitemap and responsive/key-browser flows.
- [ ] Save configuration and content backups and exercise a reversible rollback or prove the exact dry-run procedure.

### Task 5: Release decision and conditional production promotion

**Files:**
- Create: `docs/PRODUCTION-REPORT-2026-10-25.md`
- Modify: `docs/RELEASE.md` only to reflect fresh verified evidence

**Interfaces:**
- Consumes: all prior audit and preproduction evidence.
- Produces: final report with deployed SHA, URLs, checks, remaining reservations, indexation decision and rollback procedure.

- [ ] Reconcile every publication gate; do not promote while any mandatory legal, editorial, email, HTTPS, rollback, monitoring or P0/P1 condition is unverified.
- [ ] If all gates are satisfied, build the same SHA with explicit indexation setting, promote atomically, reload safely and run public HTTP(S) smoke tests.
- [ ] If a gate remains open, leave the site unpublished and document the exact blocker rather than changing it to appear complete.
- [ ] Verify public root, `/fr/`, `/en/`, every published subpage, redirects, assets, robots, sitemap, canonical/hreflang, headers and contact link.

---

## Self-review

- Spec coverage: audit, corrections, infrastructure, preproduction, backup/rollback, conditional publication and public post-deploy checks are mapped to Tasks 1-5.
- Type consistency: later tasks consume the recorded SHA and redacted evidence documents explicitly produced by earlier tasks.
- Review focus: each identified failure mode is assigned to Task 1, 2, 3 or 4 and must be evidenced before Task 5.
- Proportion: this plan preserves the current static-export architecture and limits changes to demonstrated blockers.
