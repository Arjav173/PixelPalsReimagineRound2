const defaultContent = [
    {
        img: './images/pngegg.png',
        title: 'Strawberry Cheesecake Slice',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, eaque.',
        price: '₹250'
    },
    {
        img: './images/pngegg (1).png',
        title: 'Strawberry Cheesecake Slice',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, eaque.',
        price: '₹250'
    },
    {
        img: './images/imageedit_2_4759558312.png',
        title: 'Strawberry Cheesecake Slice',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, eaque.',
        price: '₹250'
    }
];

const cakes = [
    {
        img: './images/pngwing.com (2).png',
        title: 'Chocolate Cheesecake',
        description: 'Delicious chocolate cheesecake with rich flavor.',
        price: '₹300'
    },
    {
        img: './images/pngwing.com (3).png',
        title: 'Vanilla Cheesecake',
        description: 'Smooth and creamy vanilla cheesecake.',
        price: '₹280'
    },
    {
        img: './images/pngwing.com (4).png',
        title: 'Blueberry Cheesecake',
        description: 'Fresh blueberry cheesecake with a hint of lemon.',
        price: '₹320'
    }
];

const jars = [
    {
        img: './images/pngwing.com (5).png',
        title: 'Cheesecake Jar',
        description: 'Layered cheesecake in a jar.',
        price: '₹200'
    },
    {
        img: './images/pngwing.com (5).png',
        title: 'Berry Cheesecake Jar',
        description: 'Mixed berry cheesecake in a jar.',
        price: '₹200'
    },
    {
        img: './images/pngwing.com (5).png',
        title: 'Oreo Cheesecake Jar',
        description: 'Oreo cheesecake in a jar.',
        price: '₹200'
    }
];

const contentArrays = [defaultContent, cakes, jars];
const buttons = document.querySelectorAll('.headTag button');
let currentIndex = 0;

function changeContent() {
    const content = contentArrays[currentIndex];

    
    content.forEach((item, index) => {
        document.querySelector(`#box${index + 1} .imgContainer img`).src = item.img;
        document.querySelector(`#box${index + 1} h3`).textContent = item.title;
        document.querySelector(`#box${index + 1} p`).textContent = item.description;
        document.querySelector(`#box${index + 1} h2`).textContent = item.price;
    });

    buttons.forEach((button, index) => {
        button.style.opacity = index === currentIndex ? '1' : '0.5';
    });

    currentIndex = (currentIndex + 1) % contentArrays.length; 
}

setInterval(changeContent, 4000);

changeContent();

gsap.to("#speciality_cakeimage",{
    transform: "translateX(-100%)",
    duration:5,
    scrollTrigger:{
        trigger:".speciality",
        scroller: "body",
        start:"top 0%",
        end:"top -650%",
        scrub: 0.4,
        pin:true
    }
  })