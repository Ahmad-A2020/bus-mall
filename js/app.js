'use strict';
// variables global
let products=[];
let pictureNum=3
let chanceNum=10;
let attemptnum=0;
let oldArray=[];
let button=document.createElement('button');

function product(name,url){
    this.name=name;
    this.url=url;
    this.vote=0;
    this.show=0;
    products.push(this);
}


new product('Bag','../img/bag.jpg');
new product('Banana','../img/banana.jpg');
new product('bathroom','../img/bathroom.jpg');
new product('boots','../img/boots.jpg');
new product('breakfast','../img/breakfast.jpg');
new product('bubblegum','../img/bubblegum.jpg');
new product('chair','../img/chair.jpg');
new product('cthulhu','../img/cthulhu.jpg');
new product('dragon','../img/dragon.jpg');
new product('pen','../img/pen.jpg');
new product('pet-sweep','../img/pet-sweep.jpg');
new product('scissors','../img/scissors.jpg');
new product('shark','../img/shark.jpg');
new product('sweep','../img/sweep.png');
new product('tauntaun','../img/tauntaun.jpg');
new product('unicorn','../img/unicorn.jpg');
new product('water-can','../img/water-can.jpg');
new product('wine-glass','../img/wine-glass.jpg');

console.log(products);
// documet.get
let picturesDivision=document.getElementById('container');
let container=document.getElementById("container2");
let leftPhoto=document.getElementById('left');
let midPhoto=document.getElementById('middle');
let rightPhoto=document.getElementById('right');


function generator(){  
           
    return Math.floor(Math.random()*products.length);   
}
// Create  array contains three random elements
let randomArray=[];
function threevaluesGenerators(){
    randomArray=[];
    
    for(let i=0;i<pictureNum;i++){
        randomArray.push(generator());
    }    
    return randomArray;

}

// check the element are distinguish and then render the photos 

function ThreeRandomImages(){  
    randomArray=threevaluesGenerators();   
    let compareArray=randomArray.concat(oldArray);
    console.log(compareArray);
   

    for(let i=0;i<pictureNum;i++){
        compareArray=randomArray.concat(oldArray);
        compareArray.splice(i,1);
        console.log(compareArray);
        while (compareArray.includes(randomArray[i])){
            randomArray[i]=generator();
        }
    }
    console.log(randomArray);
    // 

    leftPhoto.src=products[randomArray[0]].url;
    midPhoto.src=products[randomArray[1]].url;
    rightPhoto.src=products[randomArray[2]].url;
    // this is for show increment 
    products[randomArray[0]].show= products[randomArray[0]].show+1;
    products[randomArray[1]].show++;
    products[randomArray[2]].show++;
    oldArray=Array.from(randomArray);
    


}
ThreeRandomImages();


// console.log(products[0].show);
// Add Events. 
// leftPhoto.addEventListener('click', changePicture);
// midPhoto.addEventListener('click', changePicture);
// rightPhoto.addEventListener('click', changePicture);
picturesDivision.addEventListener('click', changePicture);
console.log(picturesDivision);

function changePicture(event){
    console.log(event.target);

    
    
    if(attemptnum<chanceNum){
        switch(event.target.id){
            case 'left':
                products[randomArray[0]].vote++;
            case 'middle':  
                products[randomArray[1]].vote++;
            case 'right':  
                products[randomArray[2]].vote++;
                
            default:
                attemptnum++;
                ThreeRandomImages();                         

                  
        }
        // console.log(products[randomArray[0]].vote)
    }else{
        
        container.appendChild(button),
        button.textContent='View Results'
        leftPhoto.removeEventListener('click', changePicture);
        midPhoto.removeEventListener('click', changePicture);
        rightPhoto.removeEventListener('click', changePicture);
        // results();  
    }
    
    
}

button.addEventListener('click',results);

function results(){

    let head=document.createElement('h1')
    container.appendChild(head)
    head.textContent='The Final Result'

    for (let i=0;i< products.length;i++){
        let productHead=document.createElement('h2');
        container.appendChild(productHead);
        productHead.textContent=products[i].name;

        let list=document.createElement('ul');
        container.appendChild(list);
        
        let istPoint=document.createElement('li');
        list.appendChild(istPoint);
        istPoint.textContent=`Number of Votes: ${products[i].vote}`;

        let sndPoint=document.createElement('li');
        list.appendChild(sndPoint);
        sndPoint.textContent=`Number of Shows: ${products[i].show}`;        
    }

}

