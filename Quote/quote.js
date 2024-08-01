function action(){
    var quotes = {
        "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
        
        "- Lana Del Rey" : '“Who are you?Are you in touch with all of your darkest fantasies?Have you created a life for yourself where you can experience them?I have. I am fucking crazy.But I am free.”',

        "- Candace Bushnell" : '“Maybe some women aren\'t meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.-Carrie Bradshaw”'
    };
    
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*authors.length)];

    var quote = quotes[author];

    document.getElementById("phrases").innerHTML = quote;
    document.getElementById("author").innerHTML = author; 
}