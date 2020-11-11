function getYearMonthDate(dateString, when)
{
  const date = new Date(dateString);
  // locale date와 string date(YYYY-MM-DD)형식 모두 호환 가능
  if (when !== 'login') {
    date.setDate(date.getDate()+7);
  }
  
  var sYear = date.getFullYear();
  var sMonth = date.getMonth() + 1;

  sMonth = sMonth > 9 ? sMonth : "0" + sMonth;

  return `${sYear}-${sMonth}`;
};


export const getCalendarData = async (date, when) => {
  
  const yearMonthDate = getYearMonthDate(date, when);

  const token = localStorage.getItem('token');

    const response = await fetch(`http://15.165.223.171:8000/api/posts/?search=${yearMonthDate}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    });

    const rawData = await response.json();
    // console.log(rawData);

    if(!response.ok) {
      switch (response.status) {
        case 401:
          throw new Error('Signature has expired');
        default:
          throw new Error(Object.getOwnPropertyNames(rawData)[0]);
        }
    }

    const refinedData = await rawData.map(function(obj){

      let newData = {};
      newData['title'] = obj.title;
      newData['start'] = obj.start_at;
      newData['end'] = obj.start_at;

      return newData;
   });
   
  //  console.log(refinedData);
   return refinedData;
}