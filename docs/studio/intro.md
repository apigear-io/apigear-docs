# Introduction

ApiGear Studio is a desktop application for designing APIs, generating SDKs, and monitoring API traffic — all in one integrated environment. It provides a visual interface for the complete API-first development workflow.

## Key Features[​](#key-features "Direct link to Key Features")

### API Design[​](#api-design "Direct link to API Design")

Create and manage ObjectAPI module files that define your interfaces, data structures, and enums. The built-in validation ensures your API definitions are correct before code generation.

### Code Generation[​](#code-generation "Direct link to Code Generation")

Configure SDK generation with solution files that link your API modules to technology templates. Run generation with a single click or enable auto-run to regenerate whenever files change.

### Scripted Backends[​](#scripted-backends "Direct link to Scripted Backends")

Test your client code against simulated services. Create scenario files with JavaScript that define how your mock service behaves, then run them directly from Studio.

### Real-Time Monitoring[​](#real-time-monitoring "Direct link to Real-Time Monitoring")

Connect your applications to Studio's monitoring endpoint and watch API calls flow through in real-time. Debug integration issues and verify correct API usage.

### Template Management[​](#template-management "Direct link to Template Management")

Browse, install, and manage SDK templates from the ApiGear registry. Templates are cached locally and automatically versioned.

## Platform Support[​](#platform-support "Direct link to Platform Support")

ApiGear Studio is available for:

* **macOS** — Intel and Apple Silicon
* **Windows** — 64-bit
* **Linux** — 64-bit (AppImage)

## Installation[​](#installation "Direct link to Installation")

Download the latest release from the [GitHub releases page](https://github.com/apigear-io/studio/releases).

### macOS[​](#macos "Direct link to macOS")

1. Download the `.dmg` file
2. Open the disk image
3. Drag ApiGear Studio to your Applications folder
4. On first launch, right-click and select "Open" to bypass Gatekeeper

### Windows[​](#windows "Direct link to Windows")

1. Download the `.exe` installer
2. Run the installer
3. Follow the installation wizard
4. Launch from the Start menu

### Linux[​](#linux "Direct link to Linux")

1. Download the `.AppImage` file
2. Make it executable: `chmod +x ApiGear-Studio-*.AppImage`
3. Run the AppImage

## Auto-Updates[​](#auto-updates "Direct link to Auto-Updates")

Studio automatically checks for updates when launched. When a new version is available:

1. A notification prompts you to update
2. The update downloads in the background
3. Restart the application to apply the update

Update Channels

In Settings, you can choose between **stable** (recommended) and **beta** update channels. Beta releases include newer features but may be less stable.

## Configuration[​](#configuration "Direct link to Configuration")

Studio stores its configuration and template cache in platform-specific locations:

| Platform | Configuration Path                              |
| -------- | ----------------------------------------------- |
| macOS    | `~/Library/Application Support/ApiGear Studio/` |
| Windows  | `%APPDATA%\ApiGear Studio\`                     |
| Linux    | `~/.config/ApiGear Studio/`                     |

## Server Ports[​](#server-ports "Direct link to Server Ports")

Studio runs local servers for simulation and monitoring:

* **Default Port**: 4333
* **Monitor Endpoint**: `http://localhost:4333/monitor/{source}`
* **Simulation Endpoint**: `ws://localhost:4333/ws`

You can change the port in Settings → Connection if the default conflicts with other services.

## Editor Integration[​](#editor-integration "Direct link to Editor Integration")

Studio opens API files in your preferred code editor. Configure the editor command in Settings → Application:

| Editor           | Command                     |
| ---------------- | --------------------------- |
| VS Code          | `code`                      |
| VS Code Insiders | `code-insiders`             |
| Sublime Text     | `subl`                      |
| Vim              | `vim`                       |
| Custom           | Any executable in your PATH |

## Getting Help[​](#getting-help "Direct link to Getting Help")

* **Documentation** — Click the Help button in the header or visit [apigear.io/docs](https://apigear.io/docs)
* **Issues** — Report bugs at [github.com/apigear-io/studio/issues](https://github.com/apigear-io/studio/issues)
* **Community** — Join the discussion on [Slack](https://join.slack.com/t/apigear/shared_invite/zt-3mjx0cl9y-8zWn~ufJnzXCl5aaPjXEfg)
