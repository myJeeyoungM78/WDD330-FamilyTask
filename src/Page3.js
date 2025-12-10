// import { createElement } from './utils';

// function Page3() {
//   const title = createElement('h2', {
//     textContent: 'Check Work Tasks' });

//   const page1Link = createElement('a', {
//     href: '/#/page1',
//     textContent: 'Member Task Manager',
//   });

//   return createElement('div', {}, [title, page1Link]);
// }

// export default Page3;

// import { createElement } from '../utils.js';
// import { getDailyQuote, getWorldTime, getCountdownToMidnight } from '../api.js';

// export function page2View() {
//   const page = createElement('div', { className: 'fade-in' });

//   const title = createElement('h2', {
//     textContent: '💪 Personal Motivation & Time Dashboard',
//     className: 'page-title'
//   });

//   const quoteBox = createElement('p', { textContent: 'Loading daily quote...' });
//   const timeBox = createElement('p', { textContent: 'Fetching current time...' });
//   const countdown = createElement('p', { textContent: 'Calculating countdown...' });

//   // Load APIs
//   getDailyQuote().then(q => (quoteBox.textContent = q));
//   getWorldTime().then(t => (timeBox.textContent = `🕒 Timezone: ${t.timezone}`));

//   function updateCountdown() {
//     countdown.textContent = getCountdownToMidnight();
//   }
//   updateCountdown();
//   setInterval(updateCountdown, 1000);

//   page.append(title, quoteBox, timeBox, countdown);
//   return page;
// }
