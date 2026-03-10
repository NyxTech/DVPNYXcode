import { For } from "solid-js"
import { useTheme } from "@tui/context/theme"
import { logo } from "@/cli/logo"

export function Logo() {
  const { theme } = useTheme()

  // Define a vibrant gradient of colors from Blue to Purple
  const gradient = [
    "#3b82f6", // Blue 500
    "#60a5fa", // Blue 400
    "#93c5fd", // Blue 300
    "#c084fc", // Purple 400
    "#a855f7", // Purple 500
    "#8b5cf6", // Violet 500
  ]

  return (
    <box>
      <For each={logo}>
        {(line, i) => (
          <box flexDirection="row">
            <text fg={gradient[i() % gradient.length] as any} selectable={false}>
              {line}
            </text>
          </box>
        )}
      </For>
    </box>
  )
}
