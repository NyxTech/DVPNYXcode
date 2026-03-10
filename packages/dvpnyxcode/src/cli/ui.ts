import z from "zod"
import { EOL } from "os"
import { NamedError } from "@dvpnyxcode/util/error"
import { logo as glyphs } from "./logo"

export namespace UI {
  export const CancelledError = NamedError.create("UICancelledError", z.void())

  export const Style = {
    TEXT_HIGHLIGHT: "\x1b[96m",
    TEXT_HIGHLIGHT_BOLD: "\x1b[96m\x1b[1m",
    TEXT_DIM: "\x1b[90m",
    TEXT_DIM_BOLD: "\x1b[90m\x1b[1m",
    TEXT_NORMAL: "\x1b[0m",
    TEXT_NORMAL_BOLD: "\x1b[1m",
    TEXT_WARNING: "\x1b[93m",
    TEXT_WARNING_BOLD: "\x1b[93m\x1b[1m",
    TEXT_DANGER: "\x1b[91m",
    TEXT_DANGER_BOLD: "\x1b[91m\x1b[1m",
    TEXT_SUCCESS: "\x1b[92m",
    TEXT_SUCCESS_BOLD: "\x1b[92m\x1b[1m",
    TEXT_INFO: "\x1b[94m",
    TEXT_INFO_BOLD: "\x1b[94m\x1b[1m",
  }

  export function println(...message: string[]) {
    print(...message)
    process.stderr.write(EOL)
  }

  export function print(...message: string[]) {
    blank = false
    process.stderr.write(message.join(" "))
  }

  let blank = false
  export function empty() {
    if (blank) return
    println("" + Style.TEXT_NORMAL)
    blank = true
  }

  export function logo(pad?: string) {
    const result: string[] = []
    const reset = "\x1b[0m"
    
    // Vertical gradient from Blue to Purple (using 256-color palette)
    // Starting with deep blue (27) through bright blue (33, 39) to purple (93, 129, 165)
    const gradient = [
      "\x1b[38;5;27m",  // Deep Blue
      "\x1b[38;5;33m",  // Blue
      "\x1b[38;5;39m",  // Sky Blue
      "\x1b[38;5;75m",  // Light Blue
      "\x1b[38;5;111m", // Very Light Blue
      "\x1b[38;5;147m", // Pale Purple
      "\x1b[38;5;183m", // Light Purple
      "\x1b[38;5;177m", // Purple
      "\x1b[38;5;171m", // Medium Purple
      "\x1b[38;5;165m", // Deep Purple
      "\x1b[38;5;129m", // Dark Purple
      "\x1b[38;5;93m",  // Violet
      "\x1b[38;5;57m",  // Indigo
      "\x1b[38;5;21m",  // Navy (for the bottom edges)
    ]
    
    glyphs.forEach((line, i) => {
      if (pad) result.push(pad)
      const color = gradient[i % gradient.length]
      result.push(color, line, reset, EOL)
    })
    return result.join("").trimEnd()
  }

  export async function input(prompt: string): Promise<string> {
    const readline = require("readline")
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise((resolve) => {
      rl.question(prompt, (answer: string) => {
        rl.close()
        resolve(answer.trim())
      })
    })
  }

  export function error(message: string) {
    if (message.startsWith("Error: ")) {
      message = message.slice("Error: ".length)
    }
    println(Style.TEXT_DANGER_BOLD + "Error: " + Style.TEXT_NORMAL + message)
  }

  export function markdown(text: string): string {
    return text
  }
}
