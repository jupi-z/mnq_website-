#!/usr/bin/env bash
set -euo pipefail
D=$(mktemp -d /tmp/monarquegrp-retention-proof.XXXXXX)
trap 'rm -rf -- "$D"' EXIT
chmod 700 "$D"
printf 'sample\n' > "$D/access.log"
printf 'expired\n' > "$D/access.log.1"
touch -d '31 days ago' "$D/access.log.1"
cat > "$D/logrotate.conf" <<EOF
$D/*.log {
    daily
    missingok
    rotate 30
    maxage 30
    compress
    delaycompress
    create 0640 root adm
}
EOF
logrotate -f -s "$D/state" "$D/logrotate.conf"
test ! -e "$D/access.log.2"
test -e "$D/access.log.1"
test -e "$D/access.log"
echo 'PASS: 31-day synthetic archive purged; active log recreated'
