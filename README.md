# Promisecord

<img src="./Promisecord.png" width="48" align="left" alt="Promisecord" />

**Promisecord** is an open-source Discord client mod maintained by **Promise**.  
It is a fork of [Equicord](https://github.com/Equicord/Equicord) / [Vencord](https://github.com/Vendicated/Vencord) (GPL-3.0).

Repository: [github.com/ironspite/expert-tribble](https://github.com/ironspite/expert-tribble)

🌐 Languages: [English](README.md) | [Italiano](README_IT.md)

---

## Privileges

### Custom badges are free

Promisecord profile badges are a **free privilege**.

- You do **not** need to donate, subscribe, or unlock anything.
- You do **not** need to run extra setup for badges to work.
- Badge data ships with the client and can refresh from the public repo automatically.
- Maintainers may assign community badges; there is no paid badge tier.

---

## Why it is safe to inspect

Promisecord is fully open source. You can read every network call in this repository.  
Nothing here is a closed “black box” binary for Discord chat itself: the mod injects into the official Discord desktop app and loads JavaScript you can build from this tree.

### What Promisecord does *not* do by default

- It does **not** send your Discord token to Promise or to this GitHub repo.
- It does **not** require a proprietary account to enable custom badges.
- Optional plugins that talk to third-party APIs only run when **you** enable them.

Discord’s own gateway, CDN, and APIs (`discord.com`, `discordapp.com`, `gateway.discord.gg`, etc.) are always used by Discord itself. Those are not listed below.

---

## Network APIs used in the source

Hosts the client may contact. **Required** = used for normal mod features after install. **Optional** = only if you enable the related plugin / feature.

### Core / updates / GitHub

| Host | Purpose | Required? |
|------|---------|-----------|
| `api.github.com` | Check / download client updates | Yes (updater) |
| `github.com` | Repo links, release downloads for the patcher CLI | Install / links |
| `raw.githubusercontent.com` | Badge JSON / logo fallback, some themes & plugins | Badge fallback / optional |
| `cdn.jsdelivr.net` | Badge JSON mirror, Shiki, some plugin assets | Badge mirror / optional |
| `cloud.equicord.org` | Optional settings cloud sync | Optional |
| `api.vencord.dev` | Alternate VenCloud sync | Optional |

### Badge services (BadgeAPI)

| Host | Purpose | Required? |
|------|---------|-----------|
| `badges.vencord.dev` | Vencord donor badges | Yes (BadgeAPI plugin) |
| `badge.equicord.org` | Equicord donor badges | Yes (BadgeAPI plugin) |
| `api.nightcord.st` | Nightcord badges | Yes (BadgeAPI plugin) |
| `cdn.jsdelivr.net` / `raw.githubusercontent.com` | **Promisecord** custom badges (`badges.json`) | Bundled locally; remote refresh optional |
| `i.pinimg.com`, `qu.ax`, `cdn.discordapp.com` | Images referenced by custom badge entries | Images only |

Promisecord custom badges are also **bundled** in `src/plugins/_api/badges/promisecordBadges.json`, so they work even if GitHub is unreachable.

### Themes / assets (optional)

| Host | Purpose |
|------|---------|
| `*.github.io`, `gitlab.com`, `codeberg.org`, `*.githack.com` | Theme CSS / assets |
| `fonts.googleapis.com` | Fonts used by some themes |
| `i.imgur.com`, `i.ibb.co`, `files.catbox.moe` | Theme images |
| `themes.equicord.org` | Theme Library plugin |

### Major optional plugin services

| Host | Plugin / feature |
|------|------------------|
| `manti.vendicated.dev` | ReviewDB |
| `decor.fieryflames.dev` | Decor |
| `usrbg.is-hardly.online` | USRBG |
| `sponsor.ajay.app` | DeArrow |
| `translate-pa.googleapis.com`, `api.deepl.com`, … | Translate plugins |
| `api.tenor.com` | GIF search |
| `ws.audioscrobbler.com`, `api.listenbrainz.org` | Music / RPC plugins |
| `anon.li`, `catbox.moe`, `0x0.st`, … | Optional file upload plugins |
| `dns.mullvad.net` | Mullvad DNS plugin |
| `rdap.org`, `free.freeipapi.com` | OSINT-style plugins |

If a plugin is disabled, its hosts are not needed for daily Discord use.

Installer note: `pnpm inject` downloads the open-source **Equilotl** CLI from Equicord’s GitHub releases only to patch your local Discord install with **your** built files from this repo (`dist/desktop`).

---

## Installation tutorial

### Requirements

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.org/) **22+**
- Discord desktop (Stable and/or Canary)
- Windows, macOS, or Linux

### 1. Install pnpm

```shell
npm i -g pnpm
```

Close and reopen the terminal after installing.

### 2. Clone the repository

```shell
git clone https://github.com/ironspite/expert-tribble.git
cd expert-tribble
```

### 3. Install dependencies

```shell
pnpm install --frozen-lockfile
```

Do **not** use an Administrator / root shell from this step onward.

### 4. Build

```shell
pnpm build
```

### 5. Inject into Discord

Close Discord completely, then:

```shell
pnpm inject
```

Pick your Discord install (Stable / Canary) when asked.

Non-interactive (Windows PowerShell example for Stable):

```powershell
$env:EQUICORD_USER_DATA_DIR = "$PWD"
$env:EQUICORD_DIRECTORY = "$PWD\dist\desktop"
$env:EQUICORD_DEV_INSTALL = "1"
.\dist\Installer\EquilotlCli.exe --install --branch stable
```

For Canary, use `--branch canary`.

### 6. Open Discord

Launch Discord. You should see **Promisecord Settings** in User Settings.

### Update after code changes

```shell
pnpm build
pnpm inject
```

(Or reinject with the Equilotl command above.)

### Uninstall / unpatch

```shell
pnpm uninject
```

### Web build (optional)

```shell
pnpm buildWeb
```

Then load the ZIP from `dist` as a browser extension (Firefox Developer Edition for unsigned extensions).

---

## Credits

- [Vendicated](https://github.com/Vendicated) — Vencord  
- [Equicord](https://github.com/Equicord) — Equicord / Equilotl  
- Maintainer: **Promise**

## License

GPL-3.0-or-later — see [LICENSE](./LICENSE).

### Discord ToS note

Client mods can violate Discord’s Terms of Service. Use at your own risk. Promisecord does not encourage breaking Discord rules; this project exists for transparency, customization, and local control of your client.
