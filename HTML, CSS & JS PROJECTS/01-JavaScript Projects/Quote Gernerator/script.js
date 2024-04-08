async function getQuote() {
  const url = "https://type.fit/api/quotes";

  const quote = document.getElementById("quote");
  const author = document.getElementById("author");


  const random = Math.floor(Math.random() * 15);
  const response = await fetch(url);
  var data = await response.json();

  console.log(response);
  console.log(data);

  quote.innerHTML = data[random].text;

  let index = data[random].author.indexOf(",");
  let a = data[random].author.slice(0, index);
  author.innerHTML = a;
  console.log(a);
}




function tweet() {
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;
  
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quoteText}" -- __${authorText}__`
    )}`;
    window.open(twitterUrl);
}
