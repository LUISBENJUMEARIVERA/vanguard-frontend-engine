<#
.SYNOPSIS
    Vanguard Frontend Engine - 1-Command Windows Installer for Google Antigravity.
#>

$ErrorActionPreference = "Stop"

$Lime = "`e[38;2;212;255;0m"
$Cyan = "`e[38;2;0;245;255m"
$Reset = "`e[0m"

Write-Host "$Lime"
Write-Host "  __   __ _   _  _  ____ _   _   _   ____  ____  "
Write-Host "  \ \ / // \ | \| |/ ___| | | | / \ |  _ \|  _ \ "
Write-Host "   \ V // _ \| .  | |  _| | | |/ _ \| |_) | | | |"
Write-Host "    \_//_/ \_\_|\_|\____|\___//_/ \_\_|_ <|____/ "
Write-Host "$Reset"
Write-Host "$Cyan:: VANGUARD FRONTEND ENGINE — ANTIGRAVITY SKILL INSTALLER ::$Reset`n"

$TargetDir = Join-Path $HOME ".gemini\antigravity\skills\vanguard-frontend-engine"

Write-Host "Target directory: $TargetDir"

if (-not (Test-Path $TargetDir)) {
    New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
}

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

if ($ScriptDir -and (Test-Path (Join-Path $ScriptDir ".agent\skills\vanguard-frontend-engine\SKILL.md"))) {
    Write-Host "Copying from local repository..."
    Copy-Item -Path (Join-Path $ScriptDir ".agent\skills\vanguard-frontend-engine\*") -Destination $TargetDir -Recurse -Force
} else {
    Write-Host "Fetching latest version from GitHub repository..."
    $RawBase = "https://raw.githubusercontent.com/vanguard-frontend/vanguard-engine/main/.agent/skills/vanguard-frontend-engine"
    Invoke-WebRequest -Uri "$RawBase/SKILL.md" -OutFile (Join-Path $TargetDir "SKILL.md")
    Invoke-WebRequest -Uri "$RawBase/config.default.yaml" -OutFile (Join-Path $TargetDir "config.default.yaml")
}

Write-Host "`n$Lime`[SUCCESS] Vanguard Frontend Engine installed successfully!$Reset"
Write-Host "Skill registered at: $TargetDir"
Write-Host "Google Antigravity is now armed with high-agency anti-generic frontend directives.`n"
