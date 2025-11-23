const ping = require('ping');

async function pingIP(host) {
  try {
    const res = await ping.promise.probe(host);
    return {
      host: res.host,
      alive: res.alive,
      time: res.time
    };
  } catch (error) {
    return { error: error.message };
  }
}

// Sử dụng
pingIP('google.com').then(result => console.log(result));
// Kết quả: { host: 'google.com', alive: true, time: 12.34 }
