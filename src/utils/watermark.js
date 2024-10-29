const asciiArt = `
   ______           ___                 
  / ____/___ ______/ (_)___  ____  ____ 
 / /   / __ '/ ___/ / / __ \\/ __ \\/ __ \\
/ /___/ /_/ / /  / / / / / / / / / / / /
\\____/\\__,_/_/  /_/_/_/ /_/_/ /_/_/ /_/ 
`;

export const showWatermark = () => {
  console.log('%c' + asciiArt, 'color: #BA6A47; font-family: monospace;');

  console.warn(
    '%cAtenção! Pare!',
    'color: red; font-size: 40px; font-weight: bold; text-shadow: 2px 2px #000;'
  );
  console.warn(
    '%cSe alguém pediu para você colar algo aqui, é provável que seja uma tentativa de golpe!',
    'color: red; font-size: 16px; font-weight: bold;'
  );

  console.log(
    '%cVisite meu GitHub: %chttps://github.com/Carlinnn',
    'font-size: 14px;',
    'font-size: 14px; color: #BA6A47;'
  );
}; 