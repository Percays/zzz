/**
 * @name Message Logger
 * @author xbttt2323
 * @version 1.2
 * @description Logs deleted messages.
 */

module.exports = class ReplaceText {
    constructor() {
        this.replacements = {
        'pegscz': 'ew',
        '@pegscz': 'ew',
        'meowcatboylolxd': '4dRccSsrf',
        'cry1273': 'cry',
        'cry4433': 'dead',
        'timesigmaboy': '11',
        '@don.edu.pl': 'fbi.gov',
        'sigmaboy21wsd': "down",
        'DELIVERlNG': '11',
        'adverytlslng': 'export',
        'Mar 11, 2025': 'Jan 6, 2019',
        'Jan 10, 2025': 'Mar 3, 2016',
    'wpvp': 'alone',
    'Feb 17, 2020': 'Feb 17, 2016'
        };
    }

    replaceText(node) {
        if (node.nodeType === 3) { // Text node
            let text = node.nodeValue;
            for (const [key, value] of Object.entries(this.replacements)) {
                text = text.replace(new RegExp(key, 'g'), value);
            }
            node.nodeValue = text;
        } else {
            for (let i = 0; i < node.childNodes.length; i++) {
                this.replaceText(node.childNodes[i]);
            }
        }
    }

    observeChanges() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => this.replaceText(node));
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    start() {
        this.replaceText(document.body);
        this.observeChanges();
    }

    stop() {
        // Cleanup if necessary
    }
};
