const tabItems = document.querySelectorAll('.tabs');

let prevSelectedItem = tabItems[0];

tabItems.forEach(item => {
    
    item.addEventListener('click',() => {
        console.log(item);
        
        prevSelectedItem.classList.remove('active')
        prevSelectedItem = item;
        item.classList.add('active')
    })
})