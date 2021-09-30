//intialize fierbase
var config = {
    apiKey:""
    authDomain:""
    databaseURL:""
    projectId:""
    storageBucket:""
    messagingSenderId:""
};
firebase.intializeApp(config);


//reference message collection
var messagesRef=firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //get value
    var name=getInptVal('name');
    var email=getInptVal('email');
    var message=getInptVal('message');

//Save message
saveMessage(name,email,message);

//alert message display in block
document.querySelector('.alert').style.display='block';

//Hide alert after 3 second
setTimeout(function(){
    document.querySelector('alert').style.display='none';


},300)

//clear form
document.getElementById('contactForm').reset();


}

//function to get form value
function getInputVal(id){
    return document.getElementById(id).ariaValueMax;

}


//save message to firebase
function saveMessage(name,email,message){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    });

}

