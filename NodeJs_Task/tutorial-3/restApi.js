const {CONTENT_TYPES}=require('./contentTypes');
const hatchbacks=[
    {
        name:'Mercedes',
        model:'A180',
        hp:190
    },
    {
        name:'BMW',
        model:'128ti',
        hp:235
    },
    {
        name:'Volkswagen',
        model:'Golf',
        hp:200
    }
]
const pickups=[
    {
        name:'Volkswagen',
        model:'Amarok',
        hp:'250'
    },
    {
        name:'Toyota',
        model:'Hilux',
        hp:196
    }
]
const sportscars=[
    {
        name:'Lamborghini',
        model:'Aventador',
        hp:700
    },
    {
        name:'Ferrari',
        model:'SF90',
        hp:1000
    },
    {
        name:'Audi',
        model:'R8',
        hp:620
    }
]
const convertibles=[
    {
        name:'BMW',
        model:'Z4',
        hp:240
    },
    {
        name: 'Mazda',
        model: 'Mx-5',
        hp: 230
    }

]

function restApi(req,res) {
   const routes= {
       '/api/hatchbacks':()=> {
           res.writeHead(200, { 'Content-Type': CONTENT_TYPES['.json'] });
           res.end(JSON.stringify(hatchbacks));
       },
       '/api/pickups':()=>{
           res.writeHead(200, { 'Content-Type': CONTENT_TYPES['.json'] });
           res.end(JSON.stringify(pickups));
       },
       '/api/sportscars':()=>{
           res.writeHead(200, { 'Content-Type': CONTENT_TYPES['.json'] });
           res.end(JSON.stringify(sportscars))
       },
       '/api/convertibles':()=>{
           res.writeHead(200, { 'Content-Type': CONTENT_TYPES['.json'] });
           res.end(JSON.stringify(convertibles));
       }
   }

   routes[req.url]();
};

module.exports=restApi;
