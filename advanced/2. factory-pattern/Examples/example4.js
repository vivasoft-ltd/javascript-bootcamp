//Example for Javascript Factory Pattern Function
//Live: https://jsfiddle.net/rijans/zhLcbepo/5/

function makePersonalHomePage(metaTitle) {
    return {
        meta_title: metaTitle,
        make_html: function () {
            console.log('A page with the title of ' + this.meta_title + ' is made!')
        }
    }
}

const homePageOfJaber = makePersonalHomePage('Jaber\'s Home');
console.log(homePageOfJaber.make_html());


const homePageOfVivaSoft = makePersonalHomePage('VivaSoft\'s Home');
console.log(homePageOfVivaSoft.make_html());

//Output:
//A page with the title of Jaber's Home is made!"
//A page with the title of VivaSoft's Home is made!"