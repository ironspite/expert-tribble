# Promisecord

<img src="./Promisecord.png" width="48" align="left" alt="Promisecord" />

**Promisecord** è un client mod Discord open source mantenuto da **Promise**.  
È un fork di [Equicord](https://github.com/Equicord/Equicord) / [Vencord](https://github.com/Vendicated/Vencord) (GPL-3.0).

Repository: [github.com/ironspite/expert-tribble](https://github.com/ironspite/expert-tribble)

🌐 Lingue: [English](README.md) | [Italiano](README_IT.md)

---

## Privilegi

### Badge custom gratuiti

I badge profilo di Promisecord sono un **privilegio gratuito**.

- Non serve donare, abbonarsi o sbloccare nulla.
- Non serve alcuna configurazione extra per i badge.
- I dati badge sono inclusi nel client e possono aggiornarsi dal repo pubblico.
- Non esiste un tier a pagamento per i badge.

---

## Perché è trasparente / “safe” da ispezionare

Tutto il codice è open source: puoi verificare ogni chiamata di rete in questo repository.  
Non è un client chiuso: si inietta nell’app Discord ufficiale e carica JavaScript che puoi compilare da questo tree.

### Cosa Promisecord *non* fa di default

- Non invia il tuo token Discord a Promise o a questo GitHub.
- Non richiede un account proprietario per i badge custom.
- I plugin opzionali che usano API di terzi partono solo se **li attivi tu**.

Le API di Discord (`discord.com`, `discordapp.com`, gateway, ecc.) restano quelle del client ufficiale e non sono elencate sotto.

---

## API di rete usate nel codice

### Core / update / GitHub

| Host | Scopo | Obbligatorio? |
|------|-------|---------------|
| `api.github.com` | Controllo / download aggiornamenti | Sì (updater) |
| `github.com` | Link repo, download CLI patcher | Install / link |
| `raw.githubusercontent.com` | Fallback badge / temi | Fallback / opzionale |
| `cdn.jsdelivr.net` | Mirror badge, Shiki, asset plugin | Mirror badge / opzionale |
| `cloud.equicord.org` | Sync cloud impostazioni | Opzionale |
| `api.vencord.dev` | VenCloud alternativo | Opzionale |

### Badge (BadgeAPI)

| Host | Scopo | Obbligatorio? |
|------|-------|---------------|
| `badges.vencord.dev` | Badge donor Vencord | Sì (BadgeAPI) |
| `badge.equicord.org` | Badge donor Equicord | Sì (BadgeAPI) |
| `api.nightcord.st` | Badge Nightcord | Sì (BadgeAPI) |
| `cdn.jsdelivr.net` / GitHub raw | Badge **Promisecord** | Bundlati in locale; refresh remoto opzionale |

I badge Promisecord sono anche in `src/plugins/_api/badges/promisecordBadges.json`.

### Plugin opzionali (principali)

ReviewDB, Decor, USRBG, DeArrow, Translate, Tenor, Last.fm / ListenBrainz, upload file (`anon.li`, ecc.), Mullvad DNS, OSINT — solo se il relativo plugin è attivo. Dettaglio completo in [README.md](README.md).

`pnpm inject` scarica solo la CLI open source **Equilotl** (release Equicord) per applicare **la tua** build locale (`dist/desktop`) a Discord.

---

## Tutorial di installazione

### Requisiti

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.org/) **22+**
- Discord desktop (Stable e/o Canary)

### 1. Installa pnpm

```shell
npm i -g pnpm
```

### 2. Clona

```shell
git clone https://github.com/ironspite/expert-tribble.git
cd expert-tribble
```

### 3. Dipendenze

```shell
pnpm install --frozen-lockfile
```

Non usare un terminale Amministratore / root da qui in poi.

### 4. Build

```shell
pnpm build
```

### 5. Inject

Chiudi Discord, poi:

```shell
pnpm inject
```

PowerShell non interattivo (Stable):

```powershell
$env:EQUICORD_USER_DATA_DIR = "$PWD"
$env:EQUICORD_DIRECTORY = "$PWD\dist\desktop"
$env:EQUICORD_DEV_INSTALL = "1"
.\dist\Installer\EquilotlCli.exe --install --branch stable
```

Canary: `--branch canary`.

### 6. Apri Discord

In Impostazioni utente trovi **Promisecord Settings**.

### Aggiornare dopo modifiche

```shell
pnpm build
pnpm inject
```

### Disinstallare

```shell
pnpm uninject
```

---

## Crediti

- Vendicated — Vencord  
- Equicord — Equicord / Equilotl  
- Maintainer: **Promise**

## Licenza

GPL-3.0-or-later — vedi [LICENSE](./LICENSE).

I client mod possono violare i ToS di Discord. Usalo a tuo rischio.
