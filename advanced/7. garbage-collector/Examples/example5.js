let user = {
    name: 'Vivasoft',
    phone: '017'
};

user = 'Vivasoft';

//জখন আমরা ইউজার ভারিয়াবল কে re-assign করলাম, JS দেখল আগের object আর ব্যাবহার হচ্ছেনা
//তাই আগের object তাকে garbage হিসাবে মনে করবে

function createUser() {
    var user1 = { };
    var user2 = { };

    user1.prop = user2;
    user2.prop = user1;
};

createUser();


//যেহেতু user1 এবং user2 এখনো আগের সম্পর্ক বজায়ে রেখেছে, সেহেতু তাদেরকে reference-counting দিয়ে মুছা যাবেনা।
//এখানে "Mark and Sweep Algorithm" টা ব্যাবহার করতে হবে।
