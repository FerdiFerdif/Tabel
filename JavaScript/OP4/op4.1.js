var mijnauto = {
    kleur: "blauw",
    merk: "ford",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5;
        console.log(this.snelheid)


    },

    toeteren: function () {
        console.log("Toet!")
    },
    toetereneeen: function () {
        console.log("Toet Toet!")

    }
}






console.log(mijnauto.kleur);
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toetereneeen();
