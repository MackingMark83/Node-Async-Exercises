const favoriteNumber = 3;



async function first() {
  const data = await $.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`);
  console.log(data);
}
first();


const favoriteNumbers = [2, 4, 6];
async function second() {
  const data = await $.getJSON(`${"http://numbersapi.com"}/${favoriteNumbers}?json`);
  console.log(data);
}
second();


async function part3() {
  const facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();
