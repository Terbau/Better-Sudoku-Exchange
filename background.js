chrome.browserAction.onClicked.addListener(function(tab) {
    // chrome.tabs.executeScript(null, {
    //     file: "onClickScript.js"
    // });

    fetch(
        'https://cors-anywhere.terbau.xyz/sudoku.com/api/level/expert', {
            // mode: 'no-cors',
            headers: {
                'x-requested-with': 'XMLHttpRequest'
            }
        })
        .then(resp => {
            resp.json()
                .then(data => {
                    const gameString = data.mission;
                    chrome.tabs.create({
                        url: 'https://sudokuexchange.com/play/?s=' + gameString
                    });
                });
        });
});