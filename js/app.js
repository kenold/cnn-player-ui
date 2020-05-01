const guests = [{
        name: "Jane Smith",
        title: "White House Press Secretary",
        photo: "anderson-cooper.jpg"
    },
    {
        name: "Kenold Beauplan",
        title: "(D) New York Governor",
        photo: "kenold-beauplan.jpg"
    }
]

const guestName = guests[0].name;
const guestTitle = guests[0].title;
const guestPhoto = guests[0].photo;

const personList = document.querySelector('#people');

// create personItem div and add classes
const personItem = document.createElement('div');
personItem.classList.add('person__item', 'person__item--guest');

// create person info div and add classes
const personInfo = document.createElement('div');
personInfo.classList.add('person__info');

// create person name div and add classes
const personName = document.createElement('div');
personName.classList.add('person__name');
personName.innerText = guestName;

// add person name to personInfo div
personInfo.appendChild(personName);

// create person photo div and add classes
const personPhoto = document.createElement('div');
personPhoto.classList.add('person__photo');

// create person photo image tag
const personImage = document.createElement('img');
personImage.src = guestPhoto;
// personImage.alt = guestName;

// add img tag to personPhoto div
personPhoto.appendChild(personImage);


// add personInfo and personPhoto to personItem div
personItem.appendChild(personInfo);
personItem.appendChild(personPhoto);

// add personItem div to people list
personList.appendChild(personItem);