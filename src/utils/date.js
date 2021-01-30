export function CalculateDate(date) {

    const date1 = Date.parse(date);
    const date2 = Date.parse(new Date());

    const createdDate = new Date(Number(date1));
    const today = new Date(Number(date2))

    const date3 = new Date(createdDate.toLocaleDateString());
    const date4 = new Date(today.toLocaleDateString());

    // To calculate the time difference of two dates 
    const Difference_In_Time = date4.getTime() - date3.getTime();

    // To calculate the no. of days between two dates 
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
}