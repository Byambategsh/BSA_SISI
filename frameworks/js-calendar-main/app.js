let calendar = document.querySelector('.calendar')

const today = new Date();
// today.setDate(1);
console.log(today.getDay());

const month_names = ['1 сар', '2 сар', '3 сар', '4 сар', '5 сар', '6 сар', '7 сар', '8 сар', '9 сар', '10 сар', '11 сар', '12 сар']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 13, 30, 31, 30, 31, 31, 30, 31, 30, 31]


    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 0)
    
    const prevLastDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
    ).getDate();

    const firstDayIndex = today.getDay();

    const lastDayIndex = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
    ).getDay();
       
    for (let x = firstDayIndex; x > 0; x--) {
      calendar_days.innerHTML = prevLastDay - x + 1;
    }

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        console.log(days_of_month[month] + first_day.getDay() - 1);

        let day = document.createElement('div')

        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            if(first_day.getDay())
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
            for (let x = firstDayIndex; x > 0; x--) {
                day.innerHTML += prevLastDay - x + 1;
            }
        }
        calendar_days.appendChild(day)
    } 
    
    // const lastDay = new Date(
    //     date.getFullYear(),
    //     date.getMonth() + 1,
    //     0
    // ).getDate();

    // const prevLastDay = new Date(
    //     date.getFullYear(),
    //     date.getMonth(),
    //     0
    // ).getDate();

    // const firstDayIndex = date.getDay();

    // const lastDayIndex = new Date(
    //     date.getFullYear(),
    //     date.getMonth() + 1,
    //     0
    // ).getDay();

    // const nextDays = 7 - lastDayIndex - 1;

    // let days = "";
  
    // for (let x = firstDayIndex; x > 0; x--) {
    //   days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    // }
  
    // for (let i = 1; i <= lastDay; i++) {
    //   if (
    //     i === new Date().getDate() &&
    //     date.getMonth() === new Date().getMonth()
    //   ) {
    //     days += `<div class="today">${i}</div>`;
    //   } else {
    //     days += `<div>${i}</div>`;
    //   }
    // }
  
    // for (let j = 1; j <= nextDays; j++) {
    //   days += `<div class="next-date">${j}</div>`;
    //   calendar_days.innerHTML = days;
    // }
     
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)
console.log(curr_month.value, curr_year.value);

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')
}