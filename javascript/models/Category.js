const categories = [
    {id: 1, name: 'Acoustics'},
    {id: 2, name: 'Action Camcorders'},
    {id: 3, name: 'Apple'},
    {id: 4, name: 'Apple iMac'},
    {id: 5, name: 'Apple iPads'},
    {id: 6, name: 'Apple iPads Mini'},
    {id: 7, name: 'Apple LED TVs'},
    {id: 8, name: 'Apple Macbook'},
    {id: 9, name: 'Asus'},
    {id: 10, name: 'Camera'},
    {id: 11, name: 'Cell Phones'},
    {id: 12, name: 'Computer Hardware'},
    {id: 13, name: 'Daydream View'},
    {id: 14, name: 'Dell Laptop'},
    {id: 15, name: 'Ear Headphones'},
    {id: 16, name: 'Headphones'},
    {id: 17, name: 'HTC'},
    {id: 18, name: 'Iphone'},
    {id: 19, name: 'Keyboards'},
    {id: 20, name: 'Laptops'},
    {id: 21, name: 'LED TVs'},
    {id: 22, name: 'Meizu'},
    {id: 23, name: 'Mice'},
    {id: 24, name: 'Motorola'},
    {id: 25, name: 'Monitors'},
    {id: 26, name: 'Nokia'},
    {id: 27, name: 'OnePlus'},
    {id: 28, name: 'Over-Ear & On-Ear Headphones'},
    {id: 29, name: 'Powerbank'},
    {id: 30, name: 'Samsung'},
    {id: 31, name: 'Smart Watches'},
    {id: 32, name: 'Sony'},
    {id: 33, name: 'Tablets'},
    {id: 34, name: 'Televisions'},
    {id: 35, name: 'Xiaomi'}
];

const formSearchCategory = document.querySelector('#categories');
console.log(formSearchCategory);
// Xuat du lieu

function renderCategory(categories) {
    const content = categories.map((category) => {
        return `<option value="${category.id}">${category.name}</option>`;
    });
    console.log(content);
    // Noi tiep chuoi
    formSearchCategory.innerHTML += content.join('');
}

renderCategory(categories);