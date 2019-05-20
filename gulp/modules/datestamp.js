module.exports = () => {
    const today = new Date();

    function leftPad(int) {
        return int < 10 ? '0' + int : int;
    }

    const month = leftPad(today.getMonth() + 1),
        day     = leftPad(today.getDate()),
        year    = today.getFullYear();

    return `${ year }.${ month }.${ day }`;
};
