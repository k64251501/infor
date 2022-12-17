class Account {
       min_Bal= 5000;
       name="karthik"
       opening_Account(){
        console.log("your is ready");
        console.log("your min balance is ready:" ,this.min_Bal);
       }

}
let c1= new Account();
let c2=new Account();
console.log(c2);
console.log(c1);
console.log(c1.min_Bal);
c1.opening_Account();
c2.opening_Account();