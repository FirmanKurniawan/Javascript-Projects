const title = chrome.runtime.getManifest().name;

chrome.contextMenus.create({
    id: title,
    title,
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((info) => {
    const text = info.selectionText;

    const words = text.split(/\s+/);
    const wordCount = words.length;
    const charCount = text.length;

    let totalLength = 0;
    let maxLength = 0;
    for (let i = 0; i < wordCount; i++) {
        const curLength = words[i]
            .replace(/[.,?!()<>{}[\]/\\+=~'`|:;]/g, '').length;
        totalLength += curLength;
        if (curLength > maxLength) {
            maxLength = curLength;
        }
    }
    const avgLength = wordCount === 0
        ? 0
        : totalLength / wordCount;

    const numAverageDigits = 2;

    alert(`Word Count: ${wordCount}
Character Count: ${charCount}
Average Word Length: ${avgLength.toFixed(numAverageDigits)}
Longest Word Length: ${maxLength}`);
});
