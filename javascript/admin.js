// Pagination
let perPage = 12; // só dòng dữ liệu
let idPage = 1;
let start = 0;


if (window.innerWidth <= 412) {
    perPage = 6
} else if (window.innerWidth > 412) {
    perPage = 12
}

console.log()
let end = perPage;


const product = [
    { id: 1, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 2, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 3, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 4, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 5, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 6, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 7, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 8, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 9, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 10, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 11, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 12, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 13, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 14, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 15, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 16, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 17, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 18, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 19, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 20, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 21, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 22, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 23, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 24, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 25, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 26, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 27, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
    { id: 28, first: "Le Hoang", last: "Nam", phone: '0858484522', product: "Apple Macbook" },
]

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

let productArr = [];
let showAdd = false;

productArr = categories;


const countTotalPage = document.querySelector('.total-page');
const countTotalProduct = document.querySelector('.total-item');

let totalPages = Math.ceil(productArr.length / perPage);


function initRender(productAr, totalPage) {
    renderProduct(productAr);
    renderListPage(totalPage);
}

initRender(productArr, totalPages);

// Hiển thị số page và số lượng file data
function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
}

getCurrentPage(1);

// Xuất dữ liệu ra màn hình
function renderProduct(product) {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<tr>'
            html += '<th class="stt" scope="row">' + index + '</th>'
            html += '<td>' + item.name + '</td>'
            html += '</tr>'
            return html;
        }
    });
    document.getElementById('product').innerHTML = html;
}
// list page (pagination)
function renderListPage(totalPages) {
    let html = '';
    html += `<li class="page-item current-page active"><a class="page-link">${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li class="page-item "><a class="page-link">${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}
// xử lý khi click vào số trang thì thay đổi dữ liệu trên table
function changePage() {
    const idPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.classList.add('active');
            if (value > 1 && value < idPages.length) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                $('.btn-next').addClass('btn-active');
                $('.btn-prev').removeClass('btn-active');
            }
            idPage = value;
            getCurrentPage(idPage);
            renderProduct(productArr);
        };
    }
}

changePage();

$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});


const toggleShowSidebar = document.getElementById('toggleShowSidebar')
toggleShowSidebar.addEventListener('click', () => {
    const showMenu = document.getElementById('showMenu')
    showMenu.style.left = 0;
})


const closeSideBar = document.getElementById("closeSideBar")
closeSideBar.addEventListener('click', () => {
    const showMenu = document.getElementById('showMenu')
    showMenu.style.left = "-330px";
})
