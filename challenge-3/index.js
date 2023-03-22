const basicSalary = personal(prompt("Enter basic salary."
));
const benefits = personal(prompt("Enter benefits."));

const HRA = 0.2*basicSalary;
const DA = 0.5*basicSalary;
let Allow = 0;
if(benefits ===`A`){
    Allow = 1700;
} else if(benefits ===`B`){
    Allow =1500
}else if(benefits ===`C`){

};
const PF = 0.12*basicSalary;
const grossSalary = basicSalary + HRA+ DA+ Allow-PF;

const payee = 0.1*grossSalary;
const NHIFDeduction = 0.06*grossSalary;
const NSSFDeduction = 0.06*grossSalary;