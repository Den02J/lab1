const fetchURL = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                requestedUrl: url
            })
        }, 500)
    })
};

const urlsToFetch = [
    '/home',
    '/lib',
    '/account',
    '/friends'
];

// Потрібно зробити щоб запити виконувалися один за одним

console.log('start:');

const f = async () => {
    for (const url of urlsToFetch) {
        await fetchURL(url).then(r => console.log(r));
    }

    console.log('end;');
}
f();

