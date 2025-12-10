// src/api.js
// ============================================
// API Module for FamilyTaskPro
// Handles: Quotable API (Motivation) + WorldTimeAPI (Time)
// ============================================
const quote_api = 'https://api.quotable.io/random';
const quote_cache_key = 'dailyQuote';
const quote_date_key = 'quoteDate';

// const TIME_API = 'http://worldtimeapi.org/api/ip';



export async function getDailyQuote() {
  const today = new Date().toISOString().split('T')[0];
  const cachedDate = localStorage.getItem(QUOTE_DATE_KEY);
  const cachedQuote = localStorage.getItem(QUOTE_CACHE_KEY);

  if (cachedQuote && cachedDate === today) {
    return cachedQuote; // ✅ return cached quote
  }

  try {
    const res = await fetch(QUOTE_API);
    if (!res.ok) throw new Error('Quote API failed');
    const data = await res.json();

    const quote = `${data.content} — ${data.author}`;
    localStorage.setItem(QUOTE_CACHE_KEY, quote);
    localStorage.setItem(QUOTE_DATE_KEY, today);

    return quote;
  } catch (err) {
    console.error('❌ Failed to fetch quote:', err);
    return 'Stay positive and do your best today!';
  }
}


export async function getWorldTime() {
  try {
    const res = await fetch(TIME_API);
    if (!res.ok) throw new Error('Time API failed');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('❌ Failed to fetch time:', err);
    return { datetime: new Date().toISOString(), timezone: 'local' };
  }
}


export function getCountdownToMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${hours}h ${minutes}m ${seconds}s until a new day 🌅`;
}
