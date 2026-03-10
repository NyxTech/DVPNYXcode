import { glob } from "glob";
import { readFile, writeFile } from "fs/promises";

async function main() {
  const files = await glob("**/*", {
    ignore: ["node_modules/**", ".git/**", "bun.lock", "**/dist/**", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.ico", "**/*.zip", "**/*.tar.gz"],
    nodir: true,
  });

  for (const file of files) {
    const content = await readFile(file, "utf8").catch(() => null);
    if (!content) continue;

    let newContent = content;

    // Replace @dvpnyxcode with @dvpnyxcode
    newContent = newContent.replace(/@dvpnyxcode/g, "@dvpnyxcode");

    // Replace DVPNYXcode with DVPNYXcode
    newContent = newContent.replace(/DVPNYXcode/g, "DVPNYXcode");

    // Replace dvpnyxcode with dvpnyxcode
    newContent = newContent.replace(/dvpnyxcode/g, "dvpnyxcode");

    // Replace DVPNYXCODE with DVPNYXCODE
    newContent = newContent.replace(/DVPNYXCODE/g, "DVPNYXCODE");

    if (newContent !== content) {
      console.log(`Updating ${file}`);
      await writeFile(file, newContent);
    }
  }
}

main();
