// CODE here for your Lambda Classes

class Person {
    constructor(baseClass) {
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
        this.gender = baseClass.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps)
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }

    demo(web) {
        return `Today we are learning about ${web}.`;
    }

    grade(student, webDev) {
        return `${student.name} receives a perfect score on ${webDev}.`;
    }
}


class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions)
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }

    listSubjects() {
        return `${this.favSubjects}.`;
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
}

class PMs extends Instructor {
    constructor(pmTraits) {
        super(pmTraits)
        this.gradClassName = pmTraits.gradClassName;
        this.favInstructor = pmTraits.favInstructor;
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standby times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

//Instructors
const Mike = new Instructor({
    name: 'Mike',
    age: '37',
    location: 'Milwaukee',
    gender: 'M',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't get me wrong`
})

const David = new Instructor({
    name: 'David',
    age: '32',
    location: 'Las Vegas',
    gender: 'M',
    specialty: 'Back-end',
    favLanguage: 'React',
    catchPhrase: `Don't forget the homis.`
})

const Mary = new Instructor({
    name: 'Mary',
    age: '45',
    location: 'New York',
    gender: 'F',
    specialty: 'UI Design',
    favLanguage: 'Java',
    catchPhrase: `If you are on time then you are already late.`
})


//PMs
const Shay = new PMs({
    name: 'Shay',
    age: '26',
    location: 'Chicago',
    gender: 'F',
    gradClassName: 'Web19',
    favInstructor: 'Josh Knell'
})

const Steve = new PMs({
    name: 'Steve',
    age: '29',
    location: 'Miami',
    gender: 'M',
    gradClassName: 'Web16',
    favInstructor: 'Josh Knell'
})

const Chino = new PMs({
    name: 'Chino',
    age: '34',
    location: 'St Louis',
    gender: 'M',
    gradClassName: 'Web12',
    favInstructor: 'Josh Knell'
})


//Students
const Maegan = new Student({
    name: 'Maegan',
    age: '30',
    location: 'Atlanta',
    gender: 'F',
    previousBackground: 'Beginner',
    className: 'Fullstack Web Dev.',
    favSubjects: 'Math, code, and JS.'
})

const Elle = new Student({
    name: 'Elle',
    age: '19',
    location: 'Reno',
    gender: 'F',
    previousBackground: 'Intermediate',
    className: 'Data Science',
    favSubjects: 'Math, React, and JS.'
})

const Andrew = new Student({
    name: 'Andrew',
    age: '38',
    location: 'Dallas',
    gender: 'M',
    previousBackground: 'Beginner',
    className: 'UI/UX.',
    favSubjects: 'Design, code, and python.'
})