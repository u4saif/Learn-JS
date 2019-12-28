console.log("Is it JavaScript ??")
for(var i=0;i<3;i++)
{ if (i%2==0) console.log("Even number " + i);
}
function maxProfit(array){
    var max=array[0];
    var min=array[0];
    array.forEach(item => {
        if(item>max) max=item;
        if(item<min) min= item;
    });
    var profit= max-min;
    console.log("Profit is " + profit + ". Max = " + max + " Min = " +min);
}
maxProfit([2,4,5,8,-20]);

//Link List 
console.log("-----------This is Link LIST -------------");
function linkList(){
    this.head=null;
    this.tail=null;
}
function nodeCreate(value,next,prev){
    this.value=value;
    this.next=next;
    this.prev=prev;
}

linkList.prototype.addToHead=function(value){
var node= new nodeCreate(value,this.head,null)
if(this.head) this.head.prev=node;
else this.tail=node;
this.head=node;
}

linkList.prototype.showall=function(){
    var curenthead=this.head;
    while(curenthead){
        console.log(curenthead.value);
        curenthead=curenthead.next;
    }
}
linkList.prototype.removeHead=function(){
    var removeValue=this.head.value;
    this.head=this.head.next;
    if(this.head) this.head.prev=null;
    else this.tail=null;
    console.log("Removed from head: " +removeValue);
}
linkList.prototype.search=function(item){
    let curent=this.head;
    let count=0;
    while(curent){
        count++;  
        if(item==curent.value) return console.log("Present at " + count);
        else curent=curent.next;
    }
    return console.log(false);
}
const ll=new linkList();
ll.addToHead(50);
ll.addToHead(60);
ll.addToHead(30)
ll.showall();
ll.removeHead();
ll.search(50);

//Binar Search 
console.log("-----------This is Binary Search -------------");
function BS(array,item){
    var midIndx=Math.floor(array.length/2);
    var midterm=array[midIndx];    
    if (item==midterm ) return true;
    else if(item<midterm && array.length>1) return BS(array.splice(0,midIndx),item);
    else if(item>midterm && array.length>1) return BS(array.splice(midIndx,array.length),item);
    else return false;
}
const result=BS([2,5,8,9,12],5);
console.log(result);
//Palandrom
console.log("-----------This is Palandrom -------------");
function Palandrom(str){
    var arrstr=str.toLowerCase().split("");
    var alpha="abcdefghijklmnopqrstuvwxyz".split("");
    console.log(alpha);
    console.log(arrstr);
    var result=[];
    arrstr.forEach(leter=>{
        {
            if(alpha.indexOf(leter)>-1) result.push(leter);
            
         } 

    });
    console.log(result.reverse().join());
}

Palandrom("madam im adam")

//Mode Finding in Array
console.log("-----------This is Find Mode -------------");
function mode(array){
    var hash={};
    array.forEach( item=>{
        if(!hash[item]) hash[item]=0;
        hash[item]++;
    });
    console.log(hash);
    let mode=[];
    let freq=0;
    for(let i in hash){
         if(hash[i]>freq) 
         {freq=hash[i];
          mode=[i];
         }
         else if(hash[i]==freq)
             { mode.push(i);} 
    }
    if (mode.length==Object.keys(hash).length) mode=[];
    console.log( mode);
    
}
console.log(mode([1,3,3,4,4,3,1,1,4,4]))
//HAsh TAble 
console.log("-----------This is HASH TABLE -------------");
function hashtable(size){
       this.buckets=Array(size);
       this.numbuckets=this.buckets.length;

}
function hashnode(key,value,next){
    this.key=key;
    this.value=value;
    this.next=next || null;
}
hashtable.prototype.hashkey=function(key){
    let total=0;
    for(i=0;i<key.length;i++)
    {
        total+=key.charCodeAt(i);
    }
    return total%this.numbuckets;
}
hashtable.prototype.insert=function(key,value){
    const node = new hashnode(key,value);
    let index=this.hashkey(key);
    if(!this.buckets[index]){ this.buckets[index]=node;}
    else { 
        let curent=this.buckets[index];
        while(curent.next){
        curent=curent.next;
        } curent.next=node;
    }
}
hashtable.prototype.show=function(){
    for (let i=0;i<this.numbuckets;i++)
    {   curentnode=this.buckets[i];
        while(curentnode)
       {
        console.log(curentnode.key,curentnode.value);
        curentnode=curentnode.next;
       }

    }
}

const ht=new hashtable(10);
ht.insert("saif",24);
ht.insert("fais",26);

console.log(ht);
ht.show();
