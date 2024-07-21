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
        img: './images/',
        title: 'Chocolate Cheesecake',
        description: 'Delicious chocolate cheesecake with rich flavor.',
        price: '₹300'
    },
    {
        img: './images/cake2.png',
        title: 'Vanilla Cheesecake',
        description: 'Smooth and creamy vanilla cheesecake.',
        price: '₹280'
    },
    {
        img: './images/cake3.png',
        title: 'Blueberry Cheesecake',
        description: 'Fresh blueberry cheesecake with a hint of lemon.',
        price: '₹320'
    }
];

const jars = [
    {
        img: './images/jar1.png',
        title: 'Cheesecake Jar',
        description: 'Layered cheesecake in a jar.',
        price: '₹200'
    },
    {
        img: './images/jar2.png',
        title: 'Berry Cheesecake Jar',
        description: 'Mixed berry cheesecake in a jar.',
        price: '₹200'
    },
    {
        img: './images/jar3.png',
        title: 'Oreo Cheesecake Jar',
        description: 'Oreo cheesecake in a jar.',
        price: '₹200'
    }
];

function changeContent(type) {
    let content;
    if (type === 'cakes') {
        content = cakes;
    } else if (type === 'slice') {
        content = defaultContent;  
    } else if (type === 'jars') {
        content = jars;
    }

    content.forEach((item, index) => {
        document.querySelector(`#box${index + 1} .imgContainer img`).src = item.img;
        document.querySelector(`#box${index + 1} h3`).textContent = item.title;
        document.querySelector(`#box${index + 1} p`).textContent = item.description;
        document.querySelector(`#box${index + 1} h2`).textContent = item.price;
    });
}
