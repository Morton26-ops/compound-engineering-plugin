# Notion Workspace

Official Notion plugin for Claude Code that bundles Notion Skills, slash commands, and the Notion MCP server — all in one install.

## Install

```
/plugin install notion-workspace@every-marketplace
```

## Features

- Search, create, and update Notion pages and databases
- Knowledge capture from conversations into structured Notion docs
- Meeting preparation with context-aware pre-reads and agendas
- Research documentation with synthesis and citations
- Spec-to-implementation planning with Notion task tracking
- OAuth authentication via the Notion MCP server

## Commands

| Command | Description |
|---------|-------------|
| `/Notion:search` | Search your entire Notion workspace |
| `/Notion:find` | Quick title-based search for pages/databases |
| `/Notion:create-page` | Create a new page under a given parent |
| `/Notion:create-task` | Create a task in a Tasks-style database |
| `/Notion:create-database-row` | Insert a row in any database |
| `/Notion:database-query` | Query a database by name or ID |
| `/Notion:tasks:setup` | Set up a Notion task board for tracking |
| `/Notion:tasks:build` | Build a task from a Notion page URL |
| `/Notion:tasks:plan` | Create an implementation plan for a task |
| `/Notion:tasks:explain-diff` | Generate a Notion doc explaining code changes |

## Skills

- **Knowledge Capture** — Transforms conversations into structured Notion documentation (FAQs, decision logs, how-to guides, wiki entries)
- **Meeting Intelligence** — Prepares meeting pre-reads and agendas by gathering Notion context and enriching with research
- **Research Documentation** — Searches across your workspace, synthesizes findings, and creates structured research docs
- **Spec to Implementation** — Transforms product/tech specs into actionable implementation plans with Notion task tracking

## MCP Server

Connects to Notion's hosted MCP server at `https://mcp.notion.com/mcp` for secure workspace access via OAuth.
