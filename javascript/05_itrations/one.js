//there are multiple loops eg for loop , foreach loop , while , dowhile loops, for in for off , map

for (let index = 0; index < 10; index++) {
    const element = index;
   // console.log(element);
}

for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop: ${i}`);

    for (let j = 0; j < 10; j++) {
        console.log(`Inner Loop ${j}`);
        
    }
    
}