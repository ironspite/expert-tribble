/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/** Canonical Promisecord brand + GitHub (Promise / ironspite). */
export const BRAND_NAME = "Promisecord";
export const BRAND_AUTHOR = "Promise";

export const PROMISECORD_GITHUB_OWNER = "ironspite";
export const PROMISECORD_GITHUB_REPO = "expert-tribble";

export const PROMISECORD_GITHUB_SLUG = `${PROMISECORD_GITHUB_OWNER}/${PROMISECORD_GITHUB_REPO}`;

export const PROMISECORD_REPO_URL = `https://github.com/${PROMISECORD_GITHUB_SLUG}`;
export const PROMISECORD_CLONE_URL = `${PROMISECORD_REPO_URL}.git`;
export const PROMISECORD_ISSUES_URL = `${PROMISECORD_REPO_URL}/issues`;
export const PROMISECORD_SPONSOR_URL = `https://github.com/sponsors/${PROMISECORD_GITHUB_OWNER}`;

/** Profile badge assets (repo root raw files). */
export const PROMISECORD_ASSETS_BASE = `https://raw.githubusercontent.com/${PROMISECORD_GITHUB_SLUG}/main`;
export const PROMISECORD_BADGES_JSON_URL = `${PROMISECORD_ASSETS_BASE}/badges.json`;
export const PROMISECORD_LOGO_URL = `${PROMISECORD_ASSETS_BASE}/Promisecord.png`;

/**
 * Equilotl-compatible installer binaries (same patcher family as Equicord).
 * Used only by `pnpm inject` to place the local build into Discord.
 */
export const PROMISECORD_INSTALLER_RELEASES_BASE =
    "https://github.com/Equicord/Equilotl/releases/latest/download/";

export function promisecordCommitUrl(hash: string) {
    return `${PROMISECORD_REPO_URL}/commit/${hash}`;
}
