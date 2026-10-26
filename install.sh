#!/usr/bin/env bash
# Vanguard Frontend Engine - One-Command Installer for Unix / macOS
# Installs vanguard-frontend-engine into Antigravity global skills directory

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
LIME='\033[38;2;212;255;0m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${LIME}"
echo "  __   __ _   _  _  ____ _   _   _   ____  ____  "
echo "  \ \ / // \ | \| |/ ___| | | | / \ |  _ \|  _ \ "
echo "   \ V // _ \| .  | |  _| | | |/ _ \| |_) | | | |"
echo "    \_//_/ \_\_|\_|\____|\___//_/ \_\_|_ <|____/ "
echo -e "${NC}"
echo -e "${CYAN}:: VANGUARD FRONTEND ENGINE — ANTIGRAVITY SKILL INSTALLER ::${NC}"
echo ""

TARGET_DIR="$HOME/.gemini/antigravity/skills/vanguard-frontend-engine"

echo -e "Target skill directory: ${GREEN}$TARGET_DIR${NC}"
mkdir -p "$TARGET_DIR"

# Source directory check (if executed from clone or downloaded via curl)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -f "$SCRIPT_DIR/.agent/skills/vanguard-frontend-engine/SKILL.md" ]; then
    echo "Copying from local repository..."
    cp -r "$SCRIPT_DIR/.agent/skills/vanguard-frontend-engine/"* "$TARGET_DIR/"
else
    echo "Fetching latest version from GitHub repository..."
    RAW_BASE="https://raw.githubusercontent.com/vanguard-frontend/vanguard-engine/main/.agent/skills/vanguard-frontend-engine"
    curl -fsSL "$RAW_BASE/SKILL.md" -o "$TARGET_DIR/SKILL.md"
    curl -fsSL "$RAW_BASE/config.default.yaml" -o "$TARGET_DIR/config.default.yaml"
fi

echo ""
echo -e "${LIME}✔ INSTALLATION COMPLETE!${NC}"
echo -e "Vanguard Frontend Engine is now active in Google Antigravity."
echo -e "Antigravity will now enforce the Anti-Generic UI manifesto on your frontend designs."
echo ""
