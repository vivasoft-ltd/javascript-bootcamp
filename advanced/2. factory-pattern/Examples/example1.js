{
    /*
    As factory pattern is a creational design pattern, we will be 
    creating student objects in this example using factory pattern.
     */
} 

function studentFactory(name, dept, roll) {
    const student = {
        name: name,
        department: dept,
        roll: roll,
        printStudentDetails: () => {
            console.log("Student name: " + name + "\n" 
            + "Department name: " + dept + "\n"
            + "Roll number: " + roll);
        }
    }

    return student;
} 

const student1 = studentFactory("Anik", "Software Engineering", "2016831008");
student1.printStudentDetails();


// output:
//     Student name: Anik
//     Department name: Software Engineering
//     Roll number: 2016831008


