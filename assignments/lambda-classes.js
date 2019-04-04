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


class student extends Person {
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

