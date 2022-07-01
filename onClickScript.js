fetch(
    'https://sudoku.com/api/level/expert',
    {
        mode: 'no-cors',
        headers: {
            'x-requested-with': 'XMLHttpRequest'
        }
    })
    .then(resp => {
        const gameString = resp.json()['mission']
        
        chrome.tabs.create({
            url: 'https://sudokuexchange.com/play/?s=' + gameString
    });
});

