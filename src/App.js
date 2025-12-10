import { createElement } from './utils';
import { initRouter } from './router';


function Header(mainDiv) {
  const appTitle = createElement('h1', {
    textContent: 'Family Task Manager',
    className: 'heading',
  });

  // nav items
  const page1 = createElement('a', {
    href: '/#/page1',
    textContent: 'Member',
  });
  const page2 = createElement('a', {
    href: '/#/page2',
    textContent: 'Personal',
  });
  const page3 = createElement('a', {
    href: '/#/page3',
    textContent: 'Check Tasks',
  });

  const nav = createElement('nav', {}, [page1, page2, page3]);

  return createElement('header', {}, [appTitle, nav]);
}

// function Footer() {
//   const copyright = createElement('span', {
//     textContent: `Copyright © ${new Date().getFullYear()}`,
//   });

//   return createElement('footer', {}, [copyright]);
// }

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  // return createElement('div', {}, [Header(main), main, Footer()]);
  return createElement('div', {}, [Header(main), main]);
}

export default App;


// const quote_api = 'https://api.quotable.io/random';
// const quote_cache_key = 'dailyQuote';
// const quote_date_key = 'quoteDate';


