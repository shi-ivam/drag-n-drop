import {v4} from 'uuid';


const one = v4();
const two = v4();
const three = v4();
const four = v4();
const five = v4();
const six = v4();
const seven = v4();
const eight = v4();
const nine = v4();
const ten = v4();

const cOne = v4();
const cTwo = v4();
const cThree = v4();


const data = {
    tasks:[
        {
            id:one,
            content:'Shimla'
        },
        {
            id:two,
            content:'Delhi'
        },
        {
            id:three,
            content:'Shirdi'
        },
        {
            id:four,
            content:'Allahabad'
        },
        {
            id:five,
            content:'Ajmer'
        },
        {
            id:six,
            content:'Chennai'
        },
        {
            id:seven,
            content:'Lucknow'
        },
        {
            id:eight,
            content:'Katihar'
        },
        {
            id:nine,
            content:'NYC'
        },
        {
            id:ten,
            content:'Amritsar'
        }
    ],
    columns:[
        {
            name:'Visited',
            id:cOne,
            tasksIds:[one,two,three,four]
        },
        {
            name:'Visiting',
            id:cTwo,
            tasksIds:[five,six,seven]
        },
        {
            name:'To Visit',
            id:cThree,
            tasksIds:[eight,nine,ten]
        }
    ]
}

export default data;