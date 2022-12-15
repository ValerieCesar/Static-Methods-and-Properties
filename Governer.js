class Governor {
    constructor(name, party, age) {
        this.name = name;
        this.party = party;
        this.age = age;
    }
    static partyType() {
        return ['democrate', 'republican', 'other'];
    }
}

console.log(Governor.partyType()[2]);