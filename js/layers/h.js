addLayer("H", {
    name: "Humans", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
    }},
    color: "#d19226",
    requires: new Decimal(1.72e43), // Can be a function that takes requirement increases into account
    resource: "humans", // Name of prestige currency
    baseResource: "infects", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.56, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    effect() {
        let eff2 = player.H.points.add(1).pow(0.215)
        eff2 = eff2.times(tmp.H.effectBase)
        return eff2
    },
    effectBase() {
        let base = new Decimal(1) 
        return base
    },
    effectDescription() {
        dis = "which boosts Infects, Experiments, and Crystal gain by "+ format(tmp.H.effect) +"x"
        return dis
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "h: reset for Humans", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    infoboxes: {
        lore: {
            title: "Humans (v0.5 Update)",
            body() {
            let text 
            text = 
            `This section is completely fanmade - This Section isn't balanced yet with Crystals & Experiments!<br> 
            Full Section will be updated on E205-test_v.2!<br><br>
            
            ???: Did you hear about the rainbow lighted baton...?<br>
            ???: Where did you hear that from...<br>
            ???: Some creepy person in a darkended corner of the hall.<br>
            ???: Why would you listen to a person that would tell you something false..<br>
            ???: No look!<br>
            - They pull out something -<br>
            ???: What the f-`
            return text
            },
        },
    },
    layerShown() {return true},
    layerShown() {
        return hasChallenge("E", 21) || player.H.points.gte(1) || player.H.unlocked;
        },
     })   