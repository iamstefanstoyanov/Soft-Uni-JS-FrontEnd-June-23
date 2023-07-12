function solve(object, stringArray) {
    let newObj = {
        'Browser Name': object['Browser Name'],
        'Open Tabs': [...object['Open Tabs']],
        'Recently Closed': [...object['Recently Closed']],
        'Browser Logs': [...object['Browser Logs']],
    };

    for (let command of stringArray) {
        let data = command.split(' ');
        let currentCommand = data[0];
        let site = data[1];

        if (currentCommand === 'Open') {
            openTab(object, site);
        } else if (currentCommand === 'Close') {
            close(object, site);
        } else if (command === 'Clear History and Cache') {
            deleteObject(object);
        }
    }

    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

    function openTab(obj, site) {
        obj['Open Tabs'].push(site);
        browserLogs(object, 'Open ' + site);
    }

    function browserLogs(obj, command) {
        obj['Browser Logs'].push(command)
    }

    function close(obj, site, secondObj) {
        if (obj['Open Tabs'].includes(site)) {
            let index = obj['Open Tabs'].findIndex(x => x === site);
            let result = obj['Open Tabs'].splice(index, 1);
            obj['Recently Closed'].push(result[0]);
            browserLogs(object, 'Close ' + site);
        }
    }

    function deleteObject(obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }
}
solve({"Browser Name":"Mozilla Firefox", "Open Tabs":["YouTube"], "Recently Closed":["Gmail", "Dropbox"], "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]}, ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])