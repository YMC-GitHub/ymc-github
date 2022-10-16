#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
const { log } = console;
async function main() {
    log(`[task] gen readme`);

    let baseurl =
        "https://awesome-profile.vercel.app/api/profile?wakatime=ymc_github&github={owner}&name=YeMiancheng&job=Fullstack%20developer&theme=dark&aboutMe=";
    let data, loc, file;
    loc = `data/about-me.md`;
    log(`[info] loc: ${loc}`);
    log(`[info] load main intro`);
    data = readAboutMe(loc);

    // data= `${baseurl}${data}`
    let encoded, decoded;
    log(`[info] encode main intro`);
    // encoded = encodeURI(data);
    encoded = encodeURIComponent(data);
    // log(encodeAsciiToUri(data))
    // log(encoded);
    // encoded = encodeURIComponent(`https://awesome-profile.vercel.app/api/profile?wakatime=ymc_github&github={owner}&name=YeMiancheng&job=Fullstack%20developer&theme=dark&aboutMe=${data}`);
    log(encoded)
    // encoded = "https://awesome-profile.vercel.app/api/profile?wakatime=ymc_github&github={owner}&name=YeMiancheng&job=Fullstack%20developer&theme=dark&aboutMe=%49%27%6d%20%61%20%66%75%6c%6c%73%74%61%63%6b%20%64%65%76%65%6c%6f%70%65%72%2c%20%49%27%76%65%20%62%65%65%6e%20%63%6f%64%69%6e%67%20%73%69%6e%63%65%20%49%20%77%61%73%20%31%38%20%79%65%61%72%73%20%6f%6c%64%2e%20%49%6e%20%32%30%31%32%20%49%20%65%6e%74%65%72%65%64%20%74%68%65%20%4e%61%6e%6a%69%6e%67%20%41%67%72%69%63%75%6c%74%75%72%61%6c%20%55%6e%69%76%65%72%73%69%74%79%20%77%68%65%72%65%20%49%20%73%74%61%72%74%65%64%20%73%74%75%64%79%69%6e%67%20%4e%61%74%75%72%65%20%53%63%69%65%6e%63%65%20%61%6e%64%20%43%6f%6d%70%75%74%65%72%20%53%63%69%65%6e%63%65%2c%20%77%68%65%72%65%20%49%20%6d%65%74%20%69%6e%63%72%65%64%69%62%6c%65%20%70%65%6f%70%6c%65%2e%20%49%20%61%6d%20%63%75%72%72%65%6e%74%6c%79%20%77%6f%72%6b%69%6e%67%20%6f%6e%20%46%6c%6f%77%65%72%54%65%61%72%2c%20%61%20%73%6f%66%74%77%61%72%65%20%66%61%63%74%6f%72%79%20%77%68%65%72%65%20%49%20%77%6f%72%6b%20%6d%61%69%6e%6c%79%20%77%69%74%68%20%52%65%61%63%74%2c%20%56%75%65%6a%73%20%61%6e%64%20%4e%6f%64%65%4a%53%2e"
    // log(encoded)

    // log(`[info] decode main intro`);
    // log([decodeURI(encoded)]) //with %2c
    // log(decodeURIComponent(encoded));

    file = {
        name: "data/readme.tpl.md",
        data: "",
    };
    
    log(`[info] tpl: ${file.name}`)
    log(`[info] load tpl`)
    file.data = readTextSync(file.name, "");

    log(`[info] render tpl`)
    file.data=writeTpl(file.data,{owner:'ymc-github',aboutme:encoded,authorName:'YeMiancheng'})

    file.name=`README.md`
    log(`[info] out: ${file.name}`)
    writeTextSync(file.name,file.data)
}
function encodeAsciiToUri(list = "") {
    let res = "";
    for (let index = 0; index < list.length; index++) {
        const s = list[index];
        res = `${res}%${s.charCodeAt()}`;
    }
    return res;
}
function readAboutMe(loc, def) {
    return readTextSync(loc, def);
}

function readTextSync(textLoc, def = "") {
    let data;
    try {
        data = readFileSync(textLoc);
        data = data.toString();
    } catch (error) {
        data = def;
    }
    return data;
}
function writeTextSync(textLoc, def = "") {
    try {
        writeFileSync(textLoc, def);
    } catch (error) {}
}

function renderTpl(tpl = "", menifest) {
    let res = tpl;
    let name;
    let suffix;
    Object.keys(menifest).forEach((key) => {
        const value = menifest[key];
        res = res.replace(new RegExp(`{${key}}`, "ig"), value);
    });
    return res;
}
/**
 *
 * @param {string} tpl
 * @param {{}} data
 * @returns {string|function({}):string}
 * @sample
 * ```
 * writeTpl('{method} repo/owner',{method:'POST'}) //POST repo/owner
 * ```
 */
function writeTpl(tpl, data) {
    if (data) {
        return renderTpl(tpl, data);
    }
    return (v) => renderTpl(tpl, v);
}

main();
// node bin/render-readme.js
// when add '#!/usr/bin/env node' to file head
// bin/render-readme.js