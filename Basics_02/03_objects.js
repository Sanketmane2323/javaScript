//singlton objects are only created when we declare it by constructors

//objects literals

const js_user={
    name:"sanket",
    age:20,
    college:"CRCE"
}

console.log(js_user);

console.log(js_user["college"])

const js_course={
    name:"sanket",
    price:"999",
    courseInstructor:"Hitesh"
}

const {courseInstructor}=js_course

console.log(courseInstructor);