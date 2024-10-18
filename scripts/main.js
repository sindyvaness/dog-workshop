
const dogsArray = [];


class Dog  {
    constructor(dogName, dateBrith, sex, color) {
        // Name, Date of Birth, Sex, and Color
        this.name = dogName;
        this.dateBrith = dateBrith;
        this.sex = sex;
        this.color = color;
    }

    add() {
        dogsArray.push(this);
    }
}

document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let dog = new Dog(
        document.getElementById('name').value,
        document.getElementById('birth').value,
        document.querySelector('input[name="sex"]:checked').value,
        document.getElementById('color').value);

    dog.add();

    console.log(dogsArray);

    printDog();
});


function printDog() {
    let tbodyDogs = document.getElementById('dog-list-tbody');

    tbodyDogs.replaceChildren();

    // this iterates the array
    dogsArray.forEach(element => {
        const tr = document.createElement('tr');        

        // console.log(Object.keys(element).length);

        // this iterates the object
        for (let key in element) {
            const td = document.createElement('td');

            if (key == "color") {
                td.innerHTML = `<input type="color" value=${element[key]}>`;
            }
            else {
                td.innerText = element[key];
            }
            
            tr.appendChild(td);

            
        }      
        
        tbodyDogs.appendChild(tr);
        
    });
}





