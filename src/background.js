chrome.action.onClicked.addListener(function(tab) {
    fetch(
        'https://cors-anywhere.terbau.xyz/sudoku.com/api/level/expert', {
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