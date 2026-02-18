import type { ClaudePlugin } from "../types/claude"
import { convertClaudeToOpenCode, type ClaudeToOpenCodeOptions } from "../converters/claude-to-opencode"
import { convertClaudeToCodex } from "../converters/claude-to-codex"
import { convertClaudeToDroid } from "../converters/claude-to-droid"
import { convertClaudeToPi } from "../converters/claude-to-pi"
import { convertClaudeToCopilot } from "../converters/claude-to-copilot"
import { convertClaudeToGemini } from "../converters/claude-to-gemini"
import { convertClaudeToKiro } from "../converters/claude-to-kiro"
import { convertClaudeToCursor } from "../converters/claude-to-cursor"
import { writeOpenCodeBundle } from "./opencode"
import { writeCodexBundle } from "./codex"
import { writeDroidBundle } from "./droid"
import { writePiBundle } from "./pi"
import { writeCopilotBundle } from "./copilot"
import { writeGeminiBundle } from "./gemini"
import { writeKiroBundle } from "./kiro"
import { writeCursorBundle } from "./cursor"

export type TargetHandler = {
  name: string
  implemented: boolean
  convert: (plugin: ClaudePlugin, options: ClaudeToOpenCodeOptions) => unknown
  write: (outputRoot: string, bundle: any) => Promise<void>
}

export const targets: Record<string, TargetHandler> = {
  opencode: {
    name: "opencode",
    implemented: true,
    convert: convertClaudeToOpenCode,
    write: writeOpenCodeBundle,
  },
  codex: {
    name: "codex",
    implemented: true,
    convert: convertClaudeToCodex,
    write: writeCodexBundle,
  },
  droid: {
    name: "droid",
    implemented: true,
    convert: convertClaudeToDroid,
    write: writeDroidBundle,
  },
  pi: {
    name: "pi",
    implemented: true,
    convert: convertClaudeToPi,
    write: writePiBundle,
  },
  copilot: {
    name: "copilot",
    implemented: true,
    convert: convertClaudeToCopilot,
    write: writeCopilotBundle,
  },
  gemini: {
    name: "gemini",
    implemented: true,
    convert: convertClaudeToGemini,
    write: writeGeminiBundle,
  },
  kiro: {
    name: "kiro",
    implemented: true,
    convert: convertClaudeToKiro,
    write: writeKiroBundle,
  },
  cursor: {
    name: "cursor",
    implemented: true,
    convert: convertClaudeToCursor,
    write: writeCursorBundle,
  },
}
