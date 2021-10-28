const password_generator = ( len ) => {
    const length = (len) ? (len) : (10);
    const string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    const numeric = '0123456789';
    const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = "";
    let character = "";
    while( password.length < length ) {
        entity1 = Math.ceil(string.length * Math.random() * Math.random());
        entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0) ? (hold.toUpperCase()) : (hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password = password.split('').sort(function(){return 0.5 - Math.random()}).join('');
    return password.substr(0,length);
}

console.log( password_generator() );
