$(document).ready(function () {
    if ($('#movie-list').html() == '') {
        $('#clear-list').hide()
    }
    $('#movie-button').click(function () {
        let movieInput = $('#movie-input').val()
        if (movieInput == '') {
            alert('Input field is empty')
        } else {
            $('#movie-list ').append(`<li class='list-item'> ${movieInput} <span class="item-close"><i class="fa fa-close></i></span></li>`)
            $('#movie-input').val('')
            $('#clear-list').show()
        }

        $('.list-item').click(function () {
            $(this).toggleClass('completed')
        })

        $('.item-close').click(function () {
            $(this).parent().remove()
            if ($('#movie-list').html() == '') {
                $('#clear-list').hide()
            }
        })
    })
    $('#clear-list').click(() => {
        $('#movie-list').empty()
        if ($('#movie-list').html() == '') {
            $('#clear-list').hide()
        }
    })
})


// Class Examples
class Car {
    constructor(name, year) {
        this.name = name

        this.year = year
    }

    startCar() {
        return (this.name + ' is starting.....')
    }
}

class Model extends Car {
    constructor(name, brand, year) {
        super(name, year)
        this.brand = brand
    }
}

const camry = new Model('camry', 'toyota', 2023)
const accord = new Model('accord', 'honda', 2014)
console.log(accord.startCar())


// Arrow Functions
const greet = (name) => {
    var school = 'Ethical'
    return 'Good morning ' + name
}

// Variable Scope
let list = ['Hassan', 'John', 'Yusuf']

for (i in list) {
    const group = 'Teenage'
    console.log(group + list[i])
}

// Mapping
let persons = [
    {
        name: 'Matthew',
        school: 'Unilorin',
        phone: 'iphone'
    },
    {
        name: 'Hassan',
        school: 'Ethical',
        phone: 'RedMi'
    }
]
persons.map((i) => {
    console.log(`${i.name} attends ${i.school}`)
})

// Destructuring

const person = {
    name: 'Matthew',
    school: 'Unilorin',
    phone: 'iphone'
}

function salute({ name, school, phone }) {
    return (`Good morning, ${name}, How is ${school}`)
}

console.log(salute(person))

class Student {
    constructor(name, school, level, teacher) {
        this.name = name
        this.school = school
        this.level = level
        this.teacher = teacher
    }
    getTeacher = () => {
        return this.teacher;
    }
    getSchool = () => {
        return this.school;
    }
}

const student1 = new Student('Hassan', 'Ethical', '3', 'John')

console.log(student1.level)

// Spread Operator
const numbersOne = [1, 2, 3, 4];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)

let [one, ...numbers] = numbersOne
console.log(numbers)