function generate(){
    var quotes = {
        "-Albert Einstein": '"A person who never made a mistake never tried anything new."',
        "-Benjamin Franklin": '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        "-Confucius": '"It does not matter how slowly you go as long as you do not stop."',
        "-Walt Disney": '"The way to get started is to quit talking and begin doing."',
        "-Thomas Edison": '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
        "-Steve Jobs": '"Your time is limited, so do not waste it living someone else’s life."',
        "-Vince Lombardi": '"Winners never quit, and quitters never win."',
        "-Nelson Mandela": '"It always seems impossible until it is done."',
        "-Winston Churchill": '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
        "-Henry Ford": '"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."',
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}