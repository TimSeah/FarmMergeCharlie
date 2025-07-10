// ==UserScript==
// @name         FarmMergeCharlie 🐖
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  🐷 Charlie My Beloved 🫶; Comment out the stuff you don't want to activate. 
// @author       CharlieLover
// @match        *://*.discordsays.com/*
// @match        https://farm-merge-valley.game-files.crazygames.com/farm-merge-valley/*
// @icon         https://pbs.twimg.com/media/GVSRyVxWgAAFwX1.jpg
// @license      GPL
// @grant        none
// ==/UserScript==

XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send = function(data) {
    this.addEventListener('readystatechange', function() {
        const url = this.responseURL
        if (url.includes("lucky_merge_config")) { // always lucky merge (kinda broken 1 tree = level 7 wood??)
            Object.defineProperty(this, "responseText", {writable: true})
            this.responseText = '{"CHANCE":100}';
        } else if(url.includes("crate_regeneration_config")) { // infinite crates
            Object.defineProperty(this, "responseText", {writable: true})
            this.responseText = '{"MAX_AMOUNT":100,"AMOUNT_PER_INTERVAL":100,"SPAWN_INTERVAL":1}'
        } else if(url.includes("energy_regeneration_config.json")) { // infinite energy
            this.responseText = '{"MAX_AMOUNT":100,"AMOUNT_PER_INTERVAL":100,"SPAWN_INTERVAL":1}'
        } else if (url.includes("marketplace_items_config")) { // Free shop
            Object.defineProperty(this, "responseText", {writable: true})
            const shop = JSON.parse(this.response)
            for (const item in shop['items']) {
                let itemrec = shop["items"][item]
                if (itemrec["payment"]["type"] == "iap") {
                    // mr beast mode 😎, sets all in-app purchases to be free
                    itemrec["payment"] = {"type": "inventory", "key": "gems", "amount": 0}
                } else {
                    itemrec["payment"]["amount"] = 0
                };
              if (itemrec["id"] == "energy_80") { // Replace 2nd energy offer with coins
                itemrec["reward"]["data"]["key"] = "coins"
                itemrec["reward"]["data"]["amount"] = 1200 // Up to 9999; instaban if higher
                // honestly you can change what you want based on the above; see the wiki for specific ids
              }
              else if (itemrec["id"] == "gems_3500") {
                itemrec["image"] = "bg_marketplace_fb_blackfriday03"
                itemrec["reward"]["data"]["key"] = "gems"
                itemrec["reward"]["data"]["amount"] = 3500 // Change the amount here, don't go over 9999 or instaban
              }
            }
            this.responseText = JSON.stringify(shop)
        } else if(this.responseURL.includes("blueprints/base_")) {
            Object.defineProperty(this, "responseText", {writable: true})
            const components = JSON.parse(this.response)
            // shovel any item; infinite worker hack; DONT SHOVEL UR SHOP
            components["components"]["shovelable"] = {};
            this.responseText = JSON.stringify(components)
        };
    });
    this.realSend(data)
};