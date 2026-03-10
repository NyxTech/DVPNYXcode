function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

function falsy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "false" || value === "0"
}

export namespace Flag {
  export const DVPNYXCODE_AUTO_SHARE = truthy("DVPNYXCODE_AUTO_SHARE")
  export const DVPNYXCODE_GIT_BASH_PATH = process.env["DVPNYXCODE_GIT_BASH_PATH"]
  export const DVPNYXCODE_CONFIG = process.env["DVPNYXCODE_CONFIG"]
  export declare const DVPNYXCODE_TUI_CONFIG: string | undefined
  export declare const DVPNYXCODE_CONFIG_DIR: string | undefined
  export const DVPNYXCODE_CONFIG_CONTENT = process.env["DVPNYXCODE_CONFIG_CONTENT"]
  export const DVPNYXCODE_DISABLE_AUTOUPDATE = truthy("DVPNYXCODE_DISABLE_AUTOUPDATE")
  export const DVPNYXCODE_DISABLE_PRUNE = truthy("DVPNYXCODE_DISABLE_PRUNE")
  export const DVPNYXCODE_DISABLE_TERMINAL_TITLE = truthy("DVPNYXCODE_DISABLE_TERMINAL_TITLE")
  export const DVPNYXCODE_PERMISSION = process.env["DVPNYXCODE_PERMISSION"]
  export const DVPNYXCODE_DISABLE_DEFAULT_PLUGINS = truthy("DVPNYXCODE_DISABLE_DEFAULT_PLUGINS")
  export const DVPNYXCODE_DISABLE_LSP_DOWNLOAD = truthy("DVPNYXCODE_DISABLE_LSP_DOWNLOAD")
  export const DVPNYXCODE_ENABLE_EXPERIMENTAL_MODELS = truthy("DVPNYXCODE_ENABLE_EXPERIMENTAL_MODELS")
  export const DVPNYXCODE_DISABLE_AUTOCOMPACT = truthy("DVPNYXCODE_DISABLE_AUTOCOMPACT")
  export const DVPNYXCODE_DISABLE_MODELS_FETCH = truthy("DVPNYXCODE_DISABLE_MODELS_FETCH")
  export const DVPNYXCODE_DISABLE_CLAUDE_CODE = truthy("DVPNYXCODE_DISABLE_CLAUDE_CODE")
  export const DVPNYXCODE_DISABLE_CLAUDE_CODE_PROMPT =
    DVPNYXCODE_DISABLE_CLAUDE_CODE || truthy("DVPNYXCODE_DISABLE_CLAUDE_CODE_PROMPT")
  export const DVPNYXCODE_DISABLE_CLAUDE_CODE_SKILLS =
    DVPNYXCODE_DISABLE_CLAUDE_CODE || truthy("DVPNYXCODE_DISABLE_CLAUDE_CODE_SKILLS")
  export const DVPNYXCODE_DISABLE_EXTERNAL_SKILLS =
    DVPNYXCODE_DISABLE_CLAUDE_CODE_SKILLS || truthy("DVPNYXCODE_DISABLE_EXTERNAL_SKILLS")
  export declare const DVPNYXCODE_DISABLE_PROJECT_CONFIG: boolean
  export const DVPNYXCODE_FAKE_VCS = process.env["DVPNYXCODE_FAKE_VCS"]
  export declare const DVPNYXCODE_CLIENT: string
  export const DVPNYXCODE_SERVER_PASSWORD = process.env["DVPNYXCODE_SERVER_PASSWORD"]
  export const DVPNYXCODE_SERVER_USERNAME = process.env["DVPNYXCODE_SERVER_USERNAME"]
  export const DVPNYXCODE_ENABLE_QUESTION_TOOL = truthy("DVPNYXCODE_ENABLE_QUESTION_TOOL")

  // Experimental
  export const DVPNYXCODE_EXPERIMENTAL = truthy("DVPNYXCODE_EXPERIMENTAL")
  export const DVPNYXCODE_EXPERIMENTAL_FILEWATCHER = truthy("DVPNYXCODE_EXPERIMENTAL_FILEWATCHER")
  export const DVPNYXCODE_EXPERIMENTAL_DISABLE_FILEWATCHER = truthy("DVPNYXCODE_EXPERIMENTAL_DISABLE_FILEWATCHER")
  export const DVPNYXCODE_EXPERIMENTAL_ICON_DISCOVERY =
    DVPNYXCODE_EXPERIMENTAL || truthy("DVPNYXCODE_EXPERIMENTAL_ICON_DISCOVERY")

  const copy = process.env["DVPNYXCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
  export const DVPNYXCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT =
    copy === undefined ? process.platform === "win32" : truthy("DVPNYXCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const DVPNYXCODE_ENABLE_EXA =
    truthy("DVPNYXCODE_ENABLE_EXA") || DVPNYXCODE_EXPERIMENTAL || truthy("DVPNYXCODE_EXPERIMENTAL_EXA")
  export const DVPNYXCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number("DVPNYXCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS")
  export const DVPNYXCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("DVPNYXCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const DVPNYXCODE_EXPERIMENTAL_OXFMT = DVPNYXCODE_EXPERIMENTAL || truthy("DVPNYXCODE_EXPERIMENTAL_OXFMT")
  export const DVPNYXCODE_EXPERIMENTAL_LSP_TY = truthy("DVPNYXCODE_EXPERIMENTAL_LSP_TY")
  export const DVPNYXCODE_EXPERIMENTAL_LSP_TOOL = DVPNYXCODE_EXPERIMENTAL || truthy("DVPNYXCODE_EXPERIMENTAL_LSP_TOOL")
  export const DVPNYXCODE_DISABLE_FILETIME_CHECK = truthy("DVPNYXCODE_DISABLE_FILETIME_CHECK")
  export const DVPNYXCODE_EXPERIMENTAL_PLAN_MODE = DVPNYXCODE_EXPERIMENTAL || truthy("DVPNYXCODE_EXPERIMENTAL_PLAN_MODE")
  export const DVPNYXCODE_EXPERIMENTAL_WORKSPACES = DVPNYXCODE_EXPERIMENTAL || truthy("DVPNYXCODE_EXPERIMENTAL_WORKSPACES")
  export const DVPNYXCODE_EXPERIMENTAL_MARKDOWN = !falsy("DVPNYXCODE_EXPERIMENTAL_MARKDOWN")
  export const DVPNYXCODE_MODELS_URL = process.env["DVPNYXCODE_MODELS_URL"]
  export const DVPNYXCODE_MODELS_PATH = process.env["DVPNYXCODE_MODELS_PATH"]
  export const DVPNYXCODE_DISABLE_CHANNEL_DB = truthy("DVPNYXCODE_DISABLE_CHANNEL_DB")
  export const DVPNYXCODE_SKIP_MIGRATIONS = truthy("DVPNYXCODE_SKIP_MIGRATIONS")

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}

// Dynamic getter for DVPNYXCODE_DISABLE_PROJECT_CONFIG
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "DVPNYXCODE_DISABLE_PROJECT_CONFIG", {
  get() {
    return truthy("DVPNYXCODE_DISABLE_PROJECT_CONFIG")
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for DVPNYXCODE_TUI_CONFIG
// This must be evaluated at access time, not module load time,
// because tests and external tooling may set this env var at runtime
Object.defineProperty(Flag, "DVPNYXCODE_TUI_CONFIG", {
  get() {
    return process.env["DVPNYXCODE_TUI_CONFIG"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for DVPNYXCODE_CONFIG_DIR
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "DVPNYXCODE_CONFIG_DIR", {
  get() {
    return process.env["DVPNYXCODE_CONFIG_DIR"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for DVPNYXCODE_CLIENT
// This must be evaluated at access time, not module load time,
// because some commands override the client at runtime
Object.defineProperty(Flag, "DVPNYXCODE_CLIENT", {
  get() {
    return process.env["DVPNYXCODE_CLIENT"] ?? "cli"
  },
  enumerable: true,
  configurable: false,
})
