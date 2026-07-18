/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/** Canonical Illegalcord GitHub ownership (ironspite fork / continuation). */
export const ILLEGALCORD_GITHUB_OWNER = "ironspite";
export const ILLEGALCORD_GITHUB_REPO = "Illegalcord";
export const ILLEGALCORD_ASSETS_REPO = "expert-tribble";

export const ILLEGALCORD_GITHUB_SLUG = `${ILLEGALCORD_GITHUB_OWNER}/${ILLEGALCORD_GITHUB_REPO}`;
export const ILLEGALCORD_ASSETS_SLUG = `${ILLEGALCORD_GITHUB_OWNER}/${ILLEGALCORD_ASSETS_REPO}`;

export const ILLEGALCORD_REPO_URL = `https://github.com/${ILLEGALCORD_GITHUB_SLUG}`;
export const ILLEGALCORD_CLONE_URL = `${ILLEGALCORD_REPO_URL}.git`;
export const ILLEGALCORD_ISSUES_URL = `${ILLEGALCORD_REPO_URL}/issues`;
export const ILLEGALCORD_SPONSOR_URL = `https://github.com/sponsors/${ILLEGALCORD_GITHUB_OWNER}`;

/** Profile badge assets (public raw files). */
export const ILLEGALCORD_ASSETS_BASE = `https://raw.githubusercontent.com/${ILLEGALCORD_ASSETS_SLUG}/main`;
export const ILLEGALCORD_BADGES_JSON_URL = `${ILLEGALCORD_ASSETS_BASE}/badges.json`;
export const ILLEGALCORD_LOGO_URL = `${ILLEGALCORD_ASSETS_BASE}/Illegalcord.png`;

/**
 * Installer binaries still ship from the historical release host until
 * ironspite publishes IllegalcordInstaller releases.
 */
export const ILLEGALCORD_INSTALLER_RELEASES_BASE =
    "https://github.com/ImHisako/IllegalcordInstaller/releases/latest/download/";

export function illegalcordCommitUrl(hash: string) {
    return `${ILLEGALCORD_REPO_URL}/commit/${hash}`;
}
