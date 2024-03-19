export class EmployerDetails {
    employerID:number=0;
    eFirstName:string="";
    eMiddleName:string="";
    eLastName:string="";
    email:string="";
    designation:string="";
    phoneNumber:number |null=null;
    loginId:number=0;
    companyID:number | null=null;
    createdBy:string="";
    createdDate:Date=new Date();
    modifiedBy:string="";
    modifiedDate:Date=new Date();
    companyName:string="";
    startEmployeeRange:number=0;
    endEmployeeRange:number=0;
    cAddress:string="";
}
