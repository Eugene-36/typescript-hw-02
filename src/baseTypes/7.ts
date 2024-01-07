/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum UserStatus {
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'BANNED',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SANDAY',
}

function isWeekend(day: UserStatus) {
  if (day === 'SATURDAY' || day === 'SANDAY') return true;

  return false;
}

console.log(isWeekend(UserStatus.Monday));
console.log(isWeekend(UserStatus.Tuesday));
console.log(isWeekend(UserStatus.Wednesday));
console.log(isWeekend(UserStatus.Thursday));
console.log(isWeekend(UserStatus.Friday));
console.log(isWeekend(UserStatus.Saturday));
console.log(isWeekend(UserStatus.Sunday));
