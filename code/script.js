const defaultContent = [
    {
        img: './images/pngegg.png',
        title: 'Chocolate Cheesecake Slice',
        description: 'Rich and creamy chocolate cheesecake topped with dark chocolate ganache.',
        price: '₹300'
    },
    {
        img: './images/pngegg (1).png',
        title: 'Blueberry Cheesecake Slice',
        description: 'Smooth and tangy cheesecake with a fresh blueberry topping.',
        price: '₹280'
    },
    {
        img: './images/imageedit_2_4759558312.png',
        title: 'Mango Cheesecake Slice',
        description: 'Delicious mango cheesecake made with ripe, juicy mangoes.',
        price: '₹270'
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

const textContent = [
  "We offer a variety of flavors to satisfy every palate.",
  "Each cake is handcrafted with love and attention to detail.",
  "Our cakes are made with the finest ingredients, ensuring a delicious and unforgettable experience."
];

gsap.to("#speciality_cakeimage", {
  x: "-78%",
  scrollTrigger: {
    trigger: ".speciality",
    start: "top 0%",
    end: "top -300%",
    scrub: true,
    smooth:0.2,
    pin: true,
    onUpdate: (self) => {
      let index = Math.floor(self.progress * (textContent.length - 1));
      document.getElementById("speciality_text").textContent = textContent[index];
    }
  }
});

