addLayer("E", {
    name: "Experiments", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#BF233F",
    requires: new Decimal(1e10), // Can be a function that takes requirement increases into account
    resource: "experiments", // Name of prestige currency
    baseResource: "infects", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.33, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "E", description: "E: reset for Experiments", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	infoboxes: {
        lore: {
            title: "Experiments",
            body: `Experiments would cause harmful infections towards people turning into themselves.`,
        },
    },
 upgrades: {
    rows: 2,
    cols: 5,
    11: {
        title: "Nyko",
        description: "The first of the Experiments...Boost Infect Gain by 9.5x",
        cost: new Decimal(1),
    },
    12: {
        title: "Abys",
        description: "Squid...Boost Infect Gain by 13x",
        cost: new Decimal(5),
    },
    13: {
        title: "Wintear",
        description: "Poisonity...Boost Infect Gain by 3x",
        cost: new Decimal(30),
    },
    14: {
        title: "Vixtra",
        description: "Something Glitchy...Boost Infect Gain by 5x",
        cost: new Decimal(1000),
        unlocked(){
            return hasUpgrade("c", 32)
        },
    },
 },
 })