/**
 * Konversi ke bahasa planet
 * Example: kamu menjadi kagamugu.
 * pastebin: https://pastebin.com/wzqHwhzh
 **/

const { stdin, stdout } = process
const rl = require('readline').createInterface(stdin, stdout)

const q = q => new Promise(resolve => {
    rl.question(q, a => resolve(a))
})

const bahasa_planet = (text, alias) => text.split``.map(v => {
    (
        (v == 'a') ? v.replace('a', `a${alias}a`) :
        (v == 'i') ? v.replace('i', `i${alias}i`) :
        (v == 'u') ? v.replace('u', `u${alias}u`) :
        (v == 'e') ? v.replace('e', `e${alias}e`) :
        (v == 'o') ? v.replace('o', `o${alias}o`) :
        v
    )
).join``

;(async() => {
    async function mulai() {
        let tanya = await q('\n? text: ')
        let alias = await q('? alias: ')

        console.log(`\n% output: ${bahasa_planet(tanya, alias)}`)
        await mulai()
    }
    await mulai()
})()
