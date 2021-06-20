const student1 = {
    name: "Vanshika",
    greet(greeting, title) {
        console.log(greeting + title + this.name);
    },
};

const student2 = {
    name: "Ayushi",
};

student1.greet.call(student2, "Hello ", "Ms ");
student1.greet.apply(student2, ["Hello ", "Ms "]);

const bindedFunction = student1.greet.bind(student2, "Good morning ", "Ms ");
bindedFunction();