<h1 align="center">DVPNYXcode</h1>
<p align="center">AI-powered coding agent — Bedrock-first, lean, and customizable.</p>
<p align="center">
  Fork of <a href="https://github.com/anomalyco/opencode">OpenCode</a>, stripped and optimized for AWS Bedrock.
</p>

---

### What is DVPNYXcode?

DVPNYXcode is a customized AI coding agent built for teams that use **AWS Bedrock** as their primary AI provider.

- **Bedrock-first** — auto-detects AWS credentials (SSO, IAM roles, profiles, ECS task roles, IMDS), always-on
- **Multi-region failover** — configurable failover regions for throttling resilience
- **Cross-region inference** — automatic region prefix handling for Claude, Nova, and other Bedrock models
- **Lean** — stripped of unnecessary packages (marketing site, storybook, slack, enterprise, etc.)
- **Client/Server architecture** — TUI, Web UI, and Desktop (Tauri) frontends
- **Provider-agnostic** — while Bedrock is primary, still supports Anthropic, OpenAI, Google, and 20+ providers

### Quick Start

```bash
bun install
bun dev                          # TUI (default)
bun dev serve                    # headless API server
bun dev /path/to/your/project    # TUI in specific directory
```

### AWS Bedrock Configuration

DVPNYXcode auto-detects AWS credentials. No config needed if you have any of:

- `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` env vars
- `AWS_PROFILE` (named profile from `~/.aws/credentials`)
- `AWS_SSO_SESSION` (SSO login via `aws sso login`)
- `AWS_WEB_IDENTITY_TOKEN_FILE` (OIDC / Kubernetes)
- ECS task role / EC2 instance metadata (IMDS)
- Bearer token via `AWS_BEARER_TOKEN_BEDROCK`

#### Optional Config

Create `dvpnyxcode.json` in your project root:

```json
{
  "provider": {
    "amazon-bedrock": {
      "options": {
        "region": "us-west-2",
        "profile": "my-aws-profile",
        "failoverRegions": ["us-east-1", "eu-west-1"],
        "maxRetries": 3,
        "retryBaseDelay": 1000,
        "endpoint": "https://vpce-xxx.bedrock-runtime.us-west-2.vpce.amazonaws.com"
      }
    }
  }
}
```

### Agents

Switch with `Tab`:

- **build** — full-access agent for development work
- **plan** — read-only agent for analysis and exploration
- **general** — subagent for complex searches (invoke via `@general`)

### Architecture

| Package | Purpose |
|---|---|
| `packages/opencode` | Core engine: agents, providers, tools, server, storage |
| `packages/app` | Web UI (SolidJS) |
| `packages/desktop` | Native desktop app (Tauri) |
| `packages/ui` | Shared component library |
| `packages/plugin` | Plugin system |
| `packages/util` | Shared utilities |

### Building

```bash
./packages/opencode/script/build.ts --single
./packages/opencode/dist/dvpnyxcode-<platform>/bin/dvpnyxcode
```

### License

MIT — see [LICENSE](./LICENSE).

Based on [OpenCode](https://github.com/anomalyco/opencode) by Anomaly.
