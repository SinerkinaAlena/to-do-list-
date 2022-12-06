class User {
    constructor(name, lastName, age, city) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
    }

    infoUser() {
        const userBlock = document.querySelector('.user');
        let html = `
<h2>${this.name} ${this.lastName}</h2>
<p>Возраст - ${this.age} </p>
<p>Город - ${this.city} </p>
`;

        UserBlock.innerHTML = html;
    }
}