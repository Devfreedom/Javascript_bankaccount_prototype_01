class Students {
    constructor(fullname, Class, StudentID, email, password) {
        this.Fullname = fullname;
        this.Class = Class;
        this.StudentID = StudentID;
        this.Email = email;
        this.Password = password
    }
    Authentiction(Fullname, StudentID){
    if(Fullname === this.Fullname & StudentID === this.StudentID){
        console.log(`${this.Fullname} Welcome you are logged in`)
        console.log()
    }else{
        console.log( `You dont have an existing account please Signup`)
    }
}
}

let Student01 = new Students("Freedom Chukwudi", "SS3", 1234, "editorfreedom01@gmail.com", "1234ae")
console.log(Student01)
Student01.Authentiction("Freedom Chukwudi", 1234)