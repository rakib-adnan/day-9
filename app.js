

const devs = [
    {
        id       : 1,
        name     :'Abu Sayeed',
        age      :26,
        skill    :'Laravel',
        location :'comilla',
        gender   :'Male',
        selary   :1500,   
    },
    {
        id       : 2,
        name     :'Md Mamun',
        age      :21,
        skill    :' Django',
        location :'Dhaka',
        gender   :'Male',
        selary   :2000,   
    },
    {
        id       : 3,
        name     :'Nur Amin',
        age      :22,
        skill    :'Golan',
        location :'Banani',
        gender   :'Male',
        selary   :1700,   
    },
    {
        id       : 4,
        name     :'Abu Sufian',
        age      :26,
        skill    :'WordPress',
        location :'Mirpur',
        gender   :'Male',
        selary   :2000,   
    },
    {
        id       : 5,
        name     :'Anamul Haq',
        age      :24,
        skill    :'java',
        location :'Savar',
        gender   :'Male',
        selary   :2500,   
    },
    
];
 const family = [



{
   Name    :    'Nur Islam',
   rel     :    'Father',
   loc     :    'Bogura',
   phn     :    '01300536029',

},
{
   Name    :    'Dewara Begum',
   rel     :    'Mother',
   loc     :    'Bogura',
   phn     :    '01721949231',

},
{
   Name    :    'Abu bakkar',
   rel     :    'Elder brother',
   loc     :    'Bogura',
   phn     :    '01722135335',

},
{
   Name    :    'Mamun',
   rel     :    'Friends',
   loc     :    'Bogura',
   phn     :    '01749254632',

},
{
   Name    :    'Abu sayeed',
   rel     :    'Friends',
   loc     :    'Saudi arabia',
   phn     :    '01718986532',

},

];

const student = [

    {
        Roll: 12,
        Name: 'Rakib Adnan',
        Loc: 'Bogura',
        Gender: 'Male',
        Bn: 33,
        En: 40,
        Math: 45,
        S: 85,
        SS: 78,
        Rel: 85,
    },
    {
        Roll: 87,
        Name: 'Priyaka das',
        Loc: 'Magura',
        Gender: 'Female',
        Bn: 75,
        En: 74,
        Math: 87,
        S: 52,
        SS: 40,
        Rel: 30,
    },
    {
        Roll: 32,
        Name: 'Uttam Kimar',
        Loc: 'Natore',
        Gender: 'Male',
        Bn: 85,
        En: 49,
        Math: 76,
        S: 75,
        SS: 94,
        Rel: 65,
    },
    {
        Roll: 98,
        Name: 'Mamun Islam',
        Loc: 'Rangpur',
        Gender: 'Male',
        Bn: 65,
        En: 85,
        Math: 76,
        S: 78,
        SS: 52,
        Rel: 75,
    },
    {
        Roll: 65,
        Name: 'Abu sayeed',
        Loc: 'Cumilla',
        Gender: 'Male',
        Bn: 95,
        En: 62,
        Math: 89,
        S: 63,
        SS: 75,
        Rel: 61,
    },
    {
        Roll: 121,
        Name: 'Yameen Hossain',
        Loc: 'Bogura',
        Gender: 'Male',
        Bn: 85,
        En: 65,
        Math: 41,
        S: 45,
        SS: 52,
        Rel: 40,
    },
    {
        Roll: 85,
        Name: 'Soniya Bariki',
        Loc: 'Netrokona',
        Gender: 'Female',
        Bn: 39,
        En: 50,
        Math: 78,
        S: 49,
        SS: 40,
        Rel: 45,
    },
    {
        Roll: 22,
        Name: 'Ratna Akter',
        Loc: 'Dhunot',
        Gender: 'Female',
        Bn: 51,
        En: 45,
        Math: 85,
        S: 74,
        SS: 41,
        Rel: 42,
    },
    {
        Roll: 25,
        Name: 'Sayeem',
        Loc: 'Kuri-Gram',
        Gender: 'Male',
        Bn: 77,
        En: 65,
        Math: 45,
        S: 42,
        SS: 65,
        Rel: 74,
    },
    {
        Roll: 15,
        Name: 'Humayra',
        Loc: 'Rajshahi',
        Gender: 'Female',
        Bn: 65,
        En: 88,
        Math: 65,
        S: 72,
        SS: 58,
        Rel: 60,
    },

]

const combineData = [devs, family, student];

const combinejson =JSON.stringify(combineData);
console.log(combinejson);

localStorage.setItem('combinejson', combinejson );

let data = localStorage.getItem('combinejson');

console.log(JSON.parse(data));
