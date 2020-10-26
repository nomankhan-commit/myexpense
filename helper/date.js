

var date1;
function date_funct() {
    var d = new Date();
    var date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`

    date1 = date;

    return date1
}



module.exports = {
    date_funct
};
