function weekday(date) {
  let weekday = date.getDay();
  if (weekday === 0) {
    return "Sun";
  } else if (weekday === 1) {
    return "Mon";
  } else if (weekday === 2) {
    return "Tue";
  } else if (weekday === 3) {
    return "Wed";
  } else if (weekday === 4) {
    return "Thu";
  } else if (weekday === 5) {
    return "Fri";
  } else if (weekday === 6) {
    return "Sat";
  } else {
    return false;
  }
};

module.exports = weekday;
