class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  //The Person class has properties name, age, and gender

  //Setter methods (setName, setAge, setGender) allow for updating the properties.
  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setGender(gender) {
    this.gender = gender;
  }

  //Getter methods (getName, getAge, getGender) allow for accessing the properties.
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  //The toString method returns a string representation of the Person object, displaying all the details.
  toString() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}
