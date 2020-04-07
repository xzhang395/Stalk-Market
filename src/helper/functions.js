/**
 * Return the next expiration date relative to local time.
 *
 * @returns   {Date}  Date object equivalent of the expiration time.
 *                    Works for both morning and afternoon.
 */
export function nextExpiringDate(now) {
  var expirationDate = new Date(now);
  if (expirationDate.getHours() < 12) {
    expirationDate.setHours(12);
  } else if (expirationDate.getHours() < 22) {
    expirationDate.setHours(22);
  } else {
    expirationDate = addDays(expirationDate, 1);
    expirationDate.setHours(12);
  }
  expirationDate.setMinutes(0, 0, 0);
  console.log("ISO date: " + expirationDate.toISOString());
  return expirationDate;
}

/**
 * Helper function to add a number of days to a Date object. Useful for transitioning months.
 *
 * @param {Date}    date  date to be modified
 * @param {Number}  days  number of days to add to the date param
 */
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

export function composePrevHashkey(date) {
  var modifiedDate = date.addHours(-12);
  return composeHashkey(modifiedDate);
}

export function composeHashkey(date) {
  var fullDate = composeDateString(date);
  if (date.getHours() < 12) {
    return fullDate + "-0"; // morning price
  }
  return fullDate + "-1"; // afternoon price
}

function composeDateString(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}
