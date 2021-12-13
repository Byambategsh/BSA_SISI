mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

var now = new Date();

mobiscroll.datepicker('#demo-marked', {
    controls: ['calendar'],
    display: 'inline',
    marked: [
        { recurring: { repeat: 'yearly', month: 5, day: 1 }, color: '#ffc400' },
        { recurring: { repeat: 'yearly', month: 12, day: 24 }, color: '#ffee00' },
        { recurring: { repeat: 'yearly', month: 12, day: 25 }, color: 'red' },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 4) },
        { date: new Date(now.getFullYear(), now.getMonth() - 2, 13) },
        { date: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3' },
        { date: new Date(now.getFullYear(), now.getMonth(), 6), color: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 11), color: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 19), color: '#89d7c9' },
        { date: new Date(now.getFullYear(), now.getMonth(), 28), color: '#ea4986' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#f13f77' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#89d7c9' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#8dec7d' },
        { date: new Date(now.getFullYear(), now.getMonth(), 21), color: '#ffc400' },
        { date: new Date(now.getFullYear(), now.getMonth(), 21), color: '#8dec7d' },
        { start: new Date(now.getFullYear(), now.getMonth() + 1, 15), end: new Date(now.getFullYear(), now.getMonth() + 1, 18), color: '#f4511e' }
    ]
});

mobiscroll.datepicker('#demo-colored', {
    controls: ['calendar'],
    display: 'inline',
    colors: [
        { recurring: { repeat: 'yearly', month: 12, day: 8 }, background: '#9ccc65' },
        { recurring: { repeat: 'yearly', month: 5, day: 1 }, background: 'red' },
        { recurring: { repeat: 'yearly', month: 12, day: 24 }, background: '#fff568' },
        { recurring: { repeat: 'yearly', month: 12, day: 25 }, background: '#e88080' },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 4), background: '#cfd8dc' },
        { date: new Date(now.getFullYear(), now.getMonth() + 2, 24), background: '#9575cd' },
        { date: new Date(now.getFullYear(), now.getMonth() - 2, 13), background: '#d4e157' },
        { date: new Date(now.getFullYear(), now.getMonth() - 1, 6), background: "#f4511e" },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 6), background: '#46c4f3' },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 22), background: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth() - 1, 11), background: '#46c4f3' },
        { date: new Date(now.getFullYear(), now.getMonth() - 1, 29), background: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 2), background: '#46c4f3' },
        { date: new Date(now.getFullYear(), now.getMonth(), 3), background: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 11), background: '#f13f77' },
        { date: new Date(now.getFullYear(), now.getMonth(), 19), background: '#8dec7d' },
        { date: new Date(now.getFullYear(), now.getMonth(), 28), background: '#ea4986' },
        { start: new Date(now.getFullYear(), now.getMonth() + 1, 15), end: new Date(now.getFullYear(), now.getMonth() + 1, 18), text: 'Conference', background: '#f4511e' }
    ]
});

mobiscroll.datepicker('#demo-labels', {
    controls: ['calendar'],
    display: 'inline',
    labels: [
        { recurring: { repeat: 'yearly', month: 12, day: 25 }, title: 'Christmas', color: '#f48fb1' },
        { recurring: { repeat: 'yearly', month: 1, day: 1 }, title: 'New year' },
        { recurring: { repeat: 'yearly', month: 12, day: 1 }, title: 'Meeting', color: '#ffc400' },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 4), text: 'Spa day', color: '#cfd8dc' },
        { date: new Date(now.getFullYear(), now.getMonth() + 2, 24), text: 'BD Party', color: '#9ccc65' },
        { date: new Date(now.getFullYear(), now.getMonth() - 2, 13), text: 'Exams', color: '#d4e157' },
        { date: new Date(now.getFullYear(), now.getMonth() - 1, 6), text: 'Trip', color: "#f4511e" },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 6), color: '#46c4f3', text: 'Pizza Night' },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 22), color: '#7e56bd', text: 'Beerpong' },
        { date: new Date(now.getFullYear(), now.getMonth() - 1, 11), color: '#46c4f3', text: 'Anniversary' },
        { date: new Date(now.getFullYear(), now.getMonth() - 1, 29), color: '#7e56bd', text: 'Pete BD' },
        { date: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3', text: 'Ana BD' },
        { date: new Date(now.getFullYear(), now.getMonth(), 3), color: '#7e56bd', text: 'Concert' },
        { date: new Date(now.getFullYear(), now.getMonth(), 11), color: '#f13f77', text: 'Trip' },
        { date: new Date(now.getFullYear(), now.getMonth(), 19), color: '#8dec7d', text: 'Math exam' },
        { date: new Date(now.getFullYear(), now.getMonth(), 28), color: '#ea4986', text: 'Party' },
        { start: new Date(now.getFullYear(), now.getMonth() + 1, 15), end: new Date(now.getFullYear(), now.getMonth() + 1, 18), text: 'Conference', color: '#f4511e' }
    ]
});
// 2 week calendar
mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

mobiscroll.datepicker('#demo-1-week', {
    controls: ['calendar'],
    display: 'inline',
    calendarType: 'week',
    calendarSize: 1
});

mobiscroll.datepicker('#demo-2-weeks', {
    controls: ['calendar'],
    display: 'inline',
    calendarType: 'week',
    calendarSize: 2
});

mobiscroll.datepicker('#demo-3-weeks', {
    controls: ['calendar'],
    display: 'inline',
    calendarType: 'week',
    calendarSize: 3
});

// switxh mode calendar
let calendar = document.querySelector('.calendar')

const month_names = ['1 сар', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
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