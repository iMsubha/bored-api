const url = 'http://www.boredapi.com/api/activity/';


//funActivity();
setInterval(() => {
    funActivity();
}, 10000);

function funActivity() {
    fetch(url)
        .then(res => res.json())
        .then(data => showMe(data.activity, data.participants))
}

function showMe(activity,participants){
    document.getElementById("activity").innerText = activity;
    document.getElementById("participants").innerText = participants;
}
