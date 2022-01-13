let user = {
    name: 'Vivasoft',
    phone: '017'
};

user = 'Vivasoft';

//when we re-assigned user variable, JS finds that the previous object is no more in use,
// so previous object is considered as garbage

function createUser() {
    var user1 = { };
    var user2 = { };

    user1.prop = user2;
    user2.prop = user1;
};

createUser();


// Because user1 and user2 still hold references to each other,
// they cannot be cleared with reference-counting.
// The 'Mark and sweep algorithm' can find garbage here
