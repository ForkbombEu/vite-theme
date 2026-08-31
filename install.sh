#!/usr/bin/env bash
set -Eeuo pipefail

force=0
install_dependencies=0
dry_run=0
target="docs"

usage() {
  printf '%s\n' \
    'Usage: ./install.sh [--force] [--install] [--dry-run] [docs-dir]' \
    '' \
    'Install the Forkbomb VitePress scaffold into a documentation directory.' \
    '' \
    'Options:' \
    '  --force    overwrite starter config and content' \
    '  --install  run npm install after copying' \
    '  --dry-run  print planned writes without changing files' \
    '  -h, --help show this help'
}

fail() {
  printf 'forkbomb-theme: %s\n' "$1" >&2
  exit 1
}

while (($# > 0)); do
  case "$1" in
    --force) force=1 ;;
    --install) install_dependencies=1 ;;
    --dry-run) dry_run=1 ;;
    -h|--help) usage; exit 0 ;;
    -*) fail "unknown option: $1" ;;
    *) target="$1" ;;
  esac
  shift
done

[[ -n "$target" && "$target" != "/" ]] || fail 'refusing an empty or root target'

script_dir="$(CDPATH= cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
template_dir="$script_dir/template"
[[ -d "$template_dir" ]] || fail "template directory not found: $template_dir"

write_dir() {
  if ((dry_run)); then
    return
  fi
  mkdir -p -- "$1"
}

copy_file() {
  local source="$1"
  local destination="$2"
  local label='kept'

  if ((force)) || [[ ! -e "$destination" ]]; then
    label='wrote'
    if ((!dry_run)); then
      mkdir -p -- "$(dirname -- "$destination")"
      cp -- "$source" "$destination"
    fi
  fi

  if ((dry_run)); then
    [[ "$label" == 'wrote' ]] && label='write'
    printf 'would %-5s %s\n' "$label" "$destination"
  else
    printf '%-5s %s\n' "$label" "$destination"
  fi
}

write_dir "$target"
copy_file "$template_dir/package.json" "$target/package.json"
copy_file "$template_dir/index.md" "$target/index.md"
copy_file "$template_dir/guide.md" "$target/guide.md"
copy_file "$template_dir/.vitepress/config.mts" "$target/.vitepress/config.mts"
copy_file "$template_dir/.vitepress/theme/index.ts" "$target/.vitepress/theme/index.ts"

if ((install_dependencies)); then
  ((dry_run)) && { printf 'would run npm install in %s\n' "$target"; exit 0; }
  command -v npm >/dev/null 2>&1 || fail 'npm is required for --install'
  (cd -- "$target" && npm install)
fi

printf '\nForkbomb VitePress scaffold ready in: %s\n' "$target"
printf 'Next: cd %s && npm install && npm run dev\n' "$target"
