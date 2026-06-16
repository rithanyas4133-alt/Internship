const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'world-map.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

const elements = [];

const groupRegex = /<g\s+id="([^"]+)">([\s\S]*?)<\/g>/g;

let tempContent = svgContent;
let match;

while ((match = groupRegex.exec(svgContent)) !== null) {
  const groupId = match[1];
  const groupInner = match[2];
  
  const dRegex = /d="([^"]+)"/g;
  const paths = [];
  let dMatch;
  while ((dMatch = dRegex.exec(groupInner)) !== null) {
    paths.push(dMatch[1]);
  }
  
  elements.push({
    id: groupId,
    type: 'group',
    paths: paths
  });
  
  tempContent = tempContent.replace(match[0], '');
}

let pathMatch;
const singlePathRegex = /<path\s+[^>]*id="([^"]+)"\s+[^>]*d="([^"]+)"/g;
while ((pathMatch = singlePathRegex.exec(tempContent)) !== null) {
  elements.push({
    id: pathMatch[1],
    type: 'path',
    d: pathMatch[2]
  });
}

const countryToContinent = {
  // North America
  ca: 'na', us: 'na', mx: 'na', gl: 'na', cu: 'na', jm: 'na', pr: 'na', gt: 'na', hn: 'na', ni: 'na', cr: 'na', pa: 'na', bz: 'na', ht: 'na', do: 'na', bs: 'na',
  // South America
  br: 'sa', ar: 'sa', cl: 'sa', co: 'sa', pe: 'sa', ve: 'sa', bo: 'sa', ec: 'sa', gy: 'sa', sr: 'sa', py: 'sa', uy: 'sa', fk: 'sa', gf: 'sa',
  // Africa
  za: 'africa', eg: 'africa', ng: 'africa', dz: 'africa', ke: 'africa', et: 'africa', ao: 'africa', cd: 'africa', cg: 'africa', ly: 'africa', sd: 'africa', ss: 'africa', ma: 'africa', eh: 'africa', so: 'africa', _somaliland: 'africa', mz: 'africa', mg: 'africa', td: 'africa', ne: 'africa', mli: 'africa', ml: 'africa', mr: 'africa', sn: 'africa', gm: 'africa', gw: 'africa', gn: 'africa', sl: 'africa', lr: 'africa', ci: 'africa', gh: 'africa', tg: 'africa', bj: 'africa', cm: 'africa', cf: 'africa', ga: 'africa', gq: 'africa', bi: 'africa', rw: 'africa', ug: 'africa', tz: 'africa', mw: 'africa', zm: 'africa', zw: 'africa', na: 'africa', bw: 'africa', sz: 'africa', ls: 'africa', dj: 'africa', er: 'africa',
  // Australia / Oceania
  au: 'australia', nz: 'australia', pg: 'australia', sb: 'australia', vu: 'australia', nc: 'australia', fj: 'australia',
  // Eurasia (Europe + Asia)
  ru: 'eurasia', cn: 'eurasia', in: 'eurasia', gb: 'eurasia', fr: 'eurasia', de: 'eurasia', it: 'eurasia', es: 'eurasia', pt: 'eurasia', nl: 'eurasia', be: 'eurasia', ch: 'eurasia', at: 'eurasia', pl: 'eurasia', cz: 'eurasia', sk: 'eurasia', hu: 'eurasia', ro: 'eurasia', bg: 'eurasia', gr: 'eurasia', tr: 'eurasia', ua: 'eurasia', by: 'eurasia', fi: 'eurasia', se: 'eurasia', no: 'eurasia', dk: 'eurasia', ie: 'eurasia', is: 'eurasia', ee: 'eurasia', lv: 'eurasia', lt: 'eurasia', md: 'eurasia', ua_extra: 'eurasia', ge: 'eurasia', am: 'eurasia', az: 'eurasia', ir: 'eurasia', iq: 'eurasia', sy: 'eurasia', jo: 'eurasia', lb: 'eurasia', il: 'eurasia', ps: 'eurasia', sa: 'eurasia', ye: 'eurasia', om: 'eurasia', ae: 'eurasia', qa: 'eurasia', bh: 'eurasia', kw: 'eurasia', af: 'eurasia', pk: 'eurasia', np: 'eurasia', bt: 'eurasia', bd: 'eurasia', lk: 'eurasia', mv: 'eurasia', mm: 'eurasia', th: 'eurasia', kh: 'eurasia', la: 'eurasia', vn: 'eurasia', my: 'eurasia', sg: 'eurasia', id: 'eurasia', ph: 'eurasia', tw: 'eurasia', jp: 'eurasia', kp: 'eurasia', kr: 'eurasia', mn: 'eurasia', kz: 'eurasia', uz: 'eurasia', tm: 'eurasia', kg: 'eurasia', tj: 'eurasia', cy: 'eurasia'
};

const finalElements = elements.map(el => {
  const continent = countryToContinent[el.id] || 'eurasia';
  return {
    ...el,
    continent: continent
  };
});

const tsContent = `// Geographically accurate world map path data
export interface WorldMapElement {
  id: string;
  type: 'path' | 'group';
  d?: string;
  paths?: string[];
  continent: string;
}

export const worldMapData: WorldMapElement[] = ${JSON.stringify(finalElements, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'components', 'WorldMapData.ts'), tsContent, 'utf8');
console.log('Successfully written WorldMapData.ts with ' + finalElements.length + ' elements.');
