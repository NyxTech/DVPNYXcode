import { ComponentProps, Show } from "solid-js"
import { useTheme } from "../theme/context"
import logoWhite from "../assets/logo-white.png"
import logoBlack from "../assets/logo-black.png"
import markWhite from "../assets/mark-white.png"
import markBlack from "../assets/mark-black.png"

export const Mark = (props: { class?: string }) => {
  const theme = useTheme()
  return (
    <Show when={theme.mode() === "dark"} fallback={<img src={markBlack} class={props.class} alt="Logo Mark" />}>
      <img src={markWhite} class={props.class} alt="Logo Mark" />
    </Show>
  )
}

export const Splash = (props: Pick<ComponentProps<"img">, "ref" | "class">) => {
  const theme = useTheme()
  return (
    <Show when={theme.mode() === "dark"} fallback={<img ref={props.ref} src={markBlack} class={props.class} alt="Splash Logo" />}>
      <img ref={props.ref} src={markWhite} class={props.class} alt="Splash Logo" />
    </Show>
  )
}

export const Logo = (props: { class?: string }) => {
  const theme = useTheme()
  return (
    <Show when={theme.mode() === "dark"} fallback={<img src={logoBlack} class={props.class} alt="Logo" />}>
      <img src={logoWhite} class={props.class} alt="Logo" />
    </Show>
  )
}
