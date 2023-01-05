//console.log('test');
//console.log('test2');

const fortuneTeller = {
    sign: ["sun", "moon", "star", "Jupiter", "Mars", "Venus"],
    have: ["luck", "good mood", "broken heart", "Covid", "love in you"],
    should: ["trust no one", "loose weight", "stop crying", "smile", "take vacation"]
};

const selectSign = (obj) => {
    const random = Math.floor(Math.random() * obj.sign.length)
    return `Your sign is ${obj.sign[random]}.`;
};

const selectHave = (obj) => {
    const random = Math.floor(Math.random() * obj.have.length)
    return `You are having ${obj.have[random]}.`;
};

const selectShould = (obj) => {
    const random = Math.floor(Math.random() * obj.should.length)
    return `You should ${obj.should[random]}.`;
};

console.log(selectSign(fortuneTeller));
console.log(selectHave(fortuneTeller));
console.log(selectShould(fortuneTeller));
