import { For } from "solid-js"
import { useTheme } from "@tui/context/theme"
import { logo } from "@/cli/logo"

export function Logo() {
  const { theme } = useTheme()

  return (
    <box>
      <For each={logo}>
        {(line) => (
          <box flexDirection="row">
            <text fg="#682E66" selectable={false}>
              {line}
            </text>
          </box>
        )}
      </For>
    </box>
  )
}
