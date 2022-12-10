// Your code here
function createEmployeeRecord(arr) {
  
    return {firstName: arr[0],
            familyName: arr[1],
            title: arr[2],
            payPerHour: arr[3],
            timeInEvents: [],
            timeOutEvents: []}
}

function createEmployeeRecords(arr) {
    let employeeRecords = []
    for(let element of arr) {
        employeeRecords.push(createEmployeeRecord(element))
    }
    return employeeRecords
}

function createTimeInEvent(obj, dateStamp) {
    let dateStampArr = dateStamp.split(" ")
    obj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStampArr[1], 10),
        date: dateStampArr[0]
    })

    return obj
}

function createTimeOutEvent(obj, dateStamp) {
    let dateStampArr = dateStamp.split(" ")
    obj.timeOutEvents.push({
        type: "TimeOut",
        hour:  parseInt(dateStampArr[1], 10),
        date: dateStampArr[0]
    })
    
    return obj
}

function hoursWorkedOnDate(obj, dateStamp) {
    let inEvents = obj.timeInEvents.find((element) => {
        return element.date === dateStamp
    })
    let outEvents = obj.timeOutEvents.find((element) => {
        return element.date === dateStamp
        })
    return (outEvents.hour - inEvents.hour)/100
}
function wagesEarnedOnDate (obj, date) {
    return hoursWorkedOnDate(obj, date) * obj.payPerHour

}

function allWagesFor(obj) {
    let salary = 0
    obj.timeInEvents.map((element) => {
        let date = element.date
        salary += wagesEarnedOnDate(obj, date)
    })
    return salary
}

function calculatePayroll(arr) {
    let totalSalary = 0
    arr.map((element) => {
        totalSalary += allWagesFor(element)
    })
    return totalSalary
}
