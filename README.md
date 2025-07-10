# Farm Merge Valley - Charlie Edition 🐖

<p align="center">
  <img src="https://venturebeat.com/wp-content/uploads/2022/11/press_release_banner.jpg" width="800">
</p>

<p align="left">

  **💡 Description:** Tampermonkey script modifies Farm Merge Valley to provide various cheats & enhancements. Works on both Discord and CrazyGames versions. Install the script and enjoy unlimited resources!

  **⚠️ Warning:** These methods go against the game's TOS, and account bans may occur. Use this tool at your own risk and with full knowledge of the consequences.
</p>

## Platform Support

- ✅ **Discord** - `*://*.discordsays.com/*`
- ✅ **CrazyGames** - `https://farm-merge-valley.game-files.crazygames.com/farm-merge-valley/*`


## Features

- [x] **Free Shop** - All marketplace items cost 0 gems/coins
- [x] **Coin Generator** - 2nd energy offer replaced with 1200 coins
- [x] **Infinite Crates** - 100 crates regenerate every second
- [x] **Infinite Energy** - 100 energy regenerates every second
- [x] **Shovel Everything** - Remove any item including trees, rocks, and obstacles
- [x] **Always Lucky Merge** - 100% chance for lucky merges (bonus items)


## Installation

### Prerequisites

- **Tampermonkey** browser extension ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) | [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089))


### Setup Steps

1. Install Tampermonkey browser extension
2. Click on the Tampermonkey icon in your browser
3. Select "Create a new script"
4. Replace the default code with the **FMV-Charlie-Edition.js** script
5. Save the script (`Ctrl+S` or `Cmd+S`)
6. Navigate to Farm Merge Valley on Discord or CrazyGames
7. The script will automatically activate - enjoy unlimited resources!

## Script Features Breakdown

### 🛒 Free Shop

- All marketplace items cost **0 gems/coins**
- In-app purchases converted to free gem transactions
- No spending required for premium items


### 🪙 Coin Generator

- 2nd energy offer in shop replaced with **1200 coins**
- Easy way to generate coins without grinding
- Safer than requesting excessive amounts


### 📦 Infinite Crates

- **100 crates** regenerate every **1 second**
- Maximum crate capacity increased to 100
- Constant supply of random items


### ⚡ Infinite Energy

- **100 energy** regenerates every **1 second**
- Maximum energy capacity increased to 100
- Never run out of energy for activities


### 🪓 Shovel Everything

- Remove **any item** from the game board
- Clear trees, rocks, and obstacles instantly
- Infinite worker functionality


### 🍀 Always Lucky Merge

- **100% chance** for lucky merges
- Every merge produces bonus items
- Accelerated progression


## Safety Notes

- **Account Bans**: Using cheats may result in permanent account suspension
- **Gem Limits**: Don't exceed 9999 gems to avoid instant bans
- **Coin Limits**: Keep coin amounts reasonable (under 10,000 recommended)


## Customization

The script can be easily modified to suit your preferences:

### Modify Coin Amount

```javascript
itemrec["reward"]["data"]["amount"] = 1200 // Change this value
```


### Modify Gem Amount

```javascript
itemrec["reward"]["data"]["amount"] = 3500 // Change this value
```

### Modify Item in Shop

Replace the `item` argument with one of the parameters in the `Item IDs` table, and `amount` with the amount you want.

```javascript
itemrec["reward"]["data"]["key"] = "item" // change to ID below
itemrec["reward"]["data"]["amount"] = 1200 // change to preferred amount
```

<details>
<summary>Item IDs</summary>

| Parameter       | Description           |
| :-------------- | :-------------------- |
| `coins`         | Yellow coins          |
| `gems`          | Purple gems           |
| `exp`           | Experience            |
| `level`         | Level                 |
| `crates`        | Crates with items     |
| `energy`        | Energy for activities |
| `tickets`       | Train tickets         |
| `wheat`         | Wheat                 |
| `egg`           | Egg                   |
| `sunflower`     | Sunflower             |
| `milk`          | Milk                  |
| `sugarcane`     | Sugarcane             |
| `bacon`         | Bacon                 |
| `carrot`        | Carrot                |
| `goatmilk`      | Goat milk             |
| `soybeans`      | Soybeans              |
| `wool`          | Wool                  |
| `corn`          | Corn                  |
| `fur`           | Fur                   |
| `coffeebeans`   | Coffee beans          |
| `tomato`        | Tomato                |
| `avocado`       | Avocado               |
| `truffle`       | Truffle               |

</details>

### Adjust Regeneration Speed

```javascript
"SPAWN_INTERVAL":1 // Change to higher number for slower regeneration
```


## Troubleshooting

### Script Not Working

- Ensure Tampermonkey is enabled
- Check that the script is active in Tampermonkey dashboard
- Refresh the game page
- Clear browser cache if necessary


### Game Breaking Issues

- If XP level exceeds 90, the game may become unplayable
- Use negative values to reduce level if needed
- Restart the game to refresh UI elements


## Additional Information

- **XP Level Changes**: May not reflect on-screen until game restart
- **Land Unlocks**: XP-based unlocks work immediately without restart
- **Resource Limits**: Stay under 9999 for gems to avoid detection
- **Negative Values**: Can be used to reduce resources if needed

**Disclaimer**: This script is for educational purposes. Use responsibly and at your own risk. I am not responsible for any consequences of using this script.