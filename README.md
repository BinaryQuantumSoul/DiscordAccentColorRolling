# DiscordAccentColorRolling
Better Discord plugin for changing theme accent color

1. Change your theme css file so that accent-color uses HSL with `--base-hue` hue.

For example: `--accent-color: hsl(var(--base-hue), 80%, 60%);`

2. Copy [accentColorRoll.plugin.js](accentColorRoll.plugin.js) inside BetterDiscord's plugin folder
3. Configure `SPEED` to have quicker or slower rolling (higher value means slower)
