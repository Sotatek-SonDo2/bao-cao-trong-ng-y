/*
// vong lap long nhau - nested loop

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (var i = 0; i < myArray.length; i++) {
    for (var i = 0; i < myArray[i].length; i++) {
        console.log (myArray[i][j]);
    }
}*/

/**
 * map()
 */

var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0

    },
      {
        id: 2,
        name: 'hHTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 1
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 1
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    },
    {
        id: 7,
        name: 'ReactJS',
        coin: 12
    },
];


function courseHandler(course) {
    //console.log(course);
    return`<h2>${course.name}<h2>`;
}

var newCourses = courses.map(courseHandler);

console.log(newCourses);
