const express = require('express')
const app = express()
const port = 3000


app.get('/calc/:start_time&:end_time', function (req, res) {
    const start_time = req.params.start_time
    const end_time = req.params.end_time

    res.setHeader('Content-Type', 'text/plain');

    var s1 = convertToSeconds(start_time);
    var s2 = convertToSeconds(end_time);

    if (s1 == -1 || s2 == -1) {
        res.write('Unfortunately there was an error with calculating the time difference. Please check that you are usimng the correct time formats. hhmmssffffff or hh:mm:ss.ffffff.');
    } else if (s1 > s2) {
        res.write('Please check that your start_time is not larger (later) than your end_time.');
    } else {
        var ans = parseInt(s2 - s1);
        res.write('' + ans);
    }
    res.end();
});

app.all('*', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write("Please use the end point format 'http://localhost:3000/calc/start_time&end_time' where start_time and end_time are in the correct time formats. hhmmssffffff or hh:mm:ss.ffffff.");
    res.end();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function convertToSeconds(time) {

    var tmp;
    var ans = 0;

    if (time.includes(":")) {
        tmp = time.split(":");

        if (("0" in tmp) && ("1" in tmp) && ("2" in tmp)) {
            ans = (Number(tmp[0]) * 60 * 60) + (Number(tmp[1]) * 60) + Number(tmp[2]);
        } else {
            ans = -1;
        }
    } else {

        var hours = time.slice(0, 2);
        var mins = time.slice(2, 4);
        var secs = time.slice(4);

        ans = (Number(hours) * 60 * 60) + (Number(mins) * 60) + Number(secs);
    }
    return ans;
}