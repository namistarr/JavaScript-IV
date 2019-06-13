// CODE here for your Lambda Classes
class Person {
    constructor(baseAttributes){
        this.name = baseAttributes.name;
        this.age = baseAttributes.age;
        this.location = baseAttributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;        
    }
    demo(subject) {
        
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
       }
    listsSubjects() {
        
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallendge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.className;
        this.favInstructor = pmAttributes.favSubjects;
       }
    standUp(channel) {        
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}






// People:
const giles = new Instructor({
    name: 'Giles',
    location: 'Sunnydale',
    age: 45,
    favLanguage: 'Latin',
    specialty: 'Demons',
    catchPhrase: `It is your sacred responsibility.`
});

const buffy = new Student({
    name: 'Buffy',
    location: 'Sunnydale',
    age: 17,
    previousBackground: `Transferred schools from LA.`,
    className: 'BIO100',
    favSubjects: ['Vampires', 'Clothes', 'More vampires']
});

const willow = new ProjectManager({
    name: 'Willow',
    location: 'Sunnydale',
    age: 17,
    favLanguage: 'French',
    specialty: 'Witchcraft',
    catchPhrase: `I don't like spiders, okay?`,
    gradClassName: 'SUN98',
    favInstructor: 'Giles'
});


  console.log(buffy.name); // Buffy
  console.log(buffy.favSubjects); // Vampires, Clothes, More vampires
  console.log(giles.catchPhrase); // It is your sacred responsibility.
  console.log(willow.specialty); // Witchcraft
  console.log(buffy.speak()); // Hello my name is Buffy, I am from Sunnydale.
  console.log(buffy.PRAssignment('JSIV')); // Buffy has submitted a PR for JSIV
  console.log(giles.demo('Vampyrs')); // Today we are learning about Vampyrs.