var obj = [
          { person: "Name 1", age: "2", company: "GUVI" },
          { person: "Name 2", age: "5", company: "GUVI geek" },
          { person: "Name 3", age: "8", company: "GUVI geek network" }]
      // console.log(obj)


// forEach
Object.keys(obj).forEach((ele)=>{
console.log(obj[ele])
})


// for

for(let i=0; i<obj.length;i++){
    console.log(obj[i].person,obj[i].age,obj[i].company)
}

// for in

for(key in obj){
    console.log(obj[key]) 
}



for (let o of obj){
    console.log(o)
}




