<h1 align="center">██████████   █████   █████ ███████████  ██████   █████ █████ █████ █████ █████<br>░░███░░░░███ ░░███   ░░███ ░░███░░░░░███░░██████ ░░███ ░░███ ░░███ ░░███ ░░███ <br> ░███   ░░███ ░███    ░███  ░███    ░███ ░███░███ ░███  ░░███ ███   ░░███ ███  <br> ░███    ░███ ░███    ░███  ░██████████  ░███░░███░███   ░░█████     ░░█████   <br> ░███    ░███ ░░███   ███   ░███░░░░░░   ░███ ░░██████    ░░███       ███░███  <br> ░███    ███   ░░░█████░    ░███         ░███  ░░█████     ░███      ███ ░░███ <br> ██████████      ░░███      █████        █████  ░░█████    █████    █████ █████<br>░░░░░░░░░░        ░░░      ░░░░░        ░░░░░    ░░░░░    ░░░░░    ░░░░░ ░░░░░ <br>                        ██████╗ ██████╗ ██████╗ ███████╗                       <br>                       ██╔════╝██╔═══██╗██╔══██╗██╔════╝                       <br>                       ██║     ██║   ██║██║  ██║█████╗                         <br>                       ██║     ██║   ██║██║  ██║██╔══╝                         <br>                       ╚██████╗╚██████╔╝██████╔╝███████╗                       <br>                        ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝</h1>

<p align="center"><b>DVPNYXcode</b> — AI-powered coding agent. Bedrock-first, lean, and highly intuitive.</p>

<p align="center">
  Rebranded fork of <a href="https://github.com/anomalyco/opencode">OpenCode</a>, stripped and optimized for <b>AWS Bedrock</b>.
</p>

---

### What is DVPNYXcode?

DVPNYXcode is a customized AI coding agent built for high-performance development teams that use **AWS Bedrock** as their primary AI engine. It combines the power of Bedrock with a smooth Terminal (TUI) and Web interface.

- **Bedrock-First Experience** — Native support for Amazon Bedrock with automatic credential detection.
- **Account & Cost Tracking** — Always see which AWS Account and Profile are generating costs directly in the UI.
- **Interactive AWS Setup** — Simple command-line flow to configure your AWS region and profile.
- **Multi-region Failover** — Smart failover to secondary regions if your primary region is throttled.
- **Lean & Fast** — Optimized architecture using Bun and Turborepo for a lightweight developer experience.
- **Versatile UI** — Use it via TUI (Terminal), Web interface, or Desktop (Tauri) app.

### Quick Start

```bash
bun install
bun run dev                          # Start the TUI (default)
bun run dev web                      # Start the Web interface
bun run dev --help                   # See all available commands
```

### Amazon Bedrock Setup

To configure or switch your AWS account/region, simply run:

```bash
dvpnyxcode auth login --provider amazon-bedrock
```

The agent will walk you through selecting your profile and region, then verify your identity using AWS STS.

### AWS Credential Detection

DVPNYXcode auto-detects AWS credentials. No manual config is needed if you have any of the following active:
- `AWS_PROFILE` (named profile from `~/.aws/credentials`)
- `AWS_SSO_SESSION` (via `aws sso login`)
- `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` env vars
- ECS task role / EC2 instance metadata (IMDS)

### Architecture

| Package | Purpose |
|---|---|
| `packages/dvpnyxcode` | Core engine: agents, providers, tools, server, storage |
| `packages/app` | Web UI (SolidJS) |
| `packages/desktop` | Native desktop app (Tauri) |
| `packages/ui` | Shared component library |
| `packages/plugin` | Plugin system |
| `packages/util` | Shared utilities |

### License

MIT — see [LICENSE](./LICENSE).

Based on [OpenCode](https://github.com/anomalyco/opencode) by Anomaly.
