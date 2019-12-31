const Users = [
  { id: '5', name: 'Peter', dob: '1993-02-23' },
  { id: '55', name: 'Nick', dob: '1995-05-11' },
  { id: '20', name: 'Alex', dob: '1991-03-07' },
  { id: '2', name: 'Helen', dob: '2000-04-03' },
  { id: '32', name: 'Markus', dob: '1991-04-07' },
  { id: '11', name: 'Tom', dob: '1993-05-15' },
  { id: '27', name: 'Brandon', dob: '1994-08-11' },
  { id: '7', name: 'Kate', dob: '1999-11-11' },
  { id: '15', name: 'Roxanne', dob: '1986-11-23' },
  { id: '1', name: 'Mary', dob: '1979-09-28' },
];

const sortUsers = (function () {
  function sortUsersById(param1, param3) {
    if (param3 === 'asc') {
      return param1.sort((a, b) => a.id - b.id);
    } if (param3 === 'desc') {
      return param1.sort((a, b) => b.id - a.id);
    } return false;
  }

  function sortUsersByNameOrByDob(param1, param2, param3) {
    if (param3 === 'asc') {
      // eslint-disable-next-line array-callback-return,consistent-return
      return param1.sort((a, b) => {
        const aName = a[param2].toLowerCase();
        const bName = b[[param2]].toLowerCase();
        if (aName > bName) return 1;
        if (aName < bName) return -1;
      });
    }
    if (param3 === 'desc') {
      // eslint-disable-next-line array-callback-return,consistent-return
      return param1.sort((a, b) => {
        const aName = a[param2].toLowerCase();
        const bName = b[param2].toLowerCase();
        if (aName > bName) return -1;
        if (aName < bName) return 1;
      });
    }
    return false;
  }

  // eslint-disable-next-line consistent-return
  function sortedArray(param1, param2, param3) {
    if (param2 === 'id') {
      return sortUsersById(param1, param3);
    }
    if (param2 === 'name' || param2 === 'dob') {
      return sortUsersByNameOrByDob(param1, param2, param3);
    }
    return false;
  }


  return {
    users(param1, param2, param3) {
      return sortedArray(param1, param2, param3);
    },
  };
}());

// eslint-disable-next-line no-console
console.log(sortUsers.users(Users, 'dob', 'asc'));
