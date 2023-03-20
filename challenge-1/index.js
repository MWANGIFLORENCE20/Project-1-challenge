function studentsMarkes(){
    let marks = "Students marks to be between 0 to 100";

    if (marks > 79){
    return A;
    } else if(marks >=60 && marks <= 79){
        return B;
    } else if(marks >=49 && marks <=59){
        return c;
    } else if(marks >=49 && marks <=40){
        return D;
    } else ;{
        return Element;
    }

}